import { test, expect } from "@playwright/test";

const ROUTES = [
  "/",
  "/about/",
  "/treatments/",
  "/treatments/bypass-surgery/",
  "/treatments/angioplasty/",
  "/treatments/valve-surgery/",
  "/treatments/childrens-heart-surgery/",
  "/treatments/minimally-invasive-surgery/",
  "/treatments/vascular-surgery/",
  "/treatments/lung-and-chest-surgery/",
  "/treatments/check-ups-second-opinion/",
  "/treatments/follow-up-care/",
  "/symptoms/",
  "/your-first-visit/",
  "/contact/",
  "/privacy-policy/",
  "/terms-of-use/",
  "/medical-disclaimer/",
];

test.describe("routes", () => {
  for (const route of ROUTES) {
    test(`${route} returns 200 with no horizontal overflow`, async ({ page }) => {
      const resp = await page.goto(route);
      expect(resp?.status()).toBe(200);
      await page.waitForTimeout(600);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(overflow).toBeLessThanOrEqual(1);
      await expect(page.locator("h1").first()).toBeVisible();
    });
  }
});

test.describe("no nested interactives", () => {
  for (const route of ROUTES) {
    test(`${route}`, async ({ page }) => {
      await page.goto(route);
      const nested = await page.evaluate(() => {
        const bad: string[] = [];
        document
          .querySelectorAll("a,button,input,select,textarea,summary")
          .forEach((el) => {
            const parent = el.parentElement?.closest(
              "a,button,input,select,textarea,summary"
            );
            if (parent) {
              bad.push(
                `${el.tagName}.${(el as HTMLElement).className} inside ${parent.tagName}.${(parent as HTMLElement).className}`
              );
            }
          });
        return bad;
      });
      expect(nested).toEqual([]);
    });
  }
});

test.describe("mega menu", () => {
  test.skip(({ isMobile }) => !!isMobile, "desktop nav only");

  test("opens on hover/click, closes on Escape, contains 9 treatments", async ({
    page,
  }) => {
    await page.goto("/");
    const btn = page.locator(".ddb");
    await btn.hover();
    await expect(btn).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(".mega .mi")).toHaveCount(9);
    await page.keyboard.press("Escape");
    await expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  test("is keyboard navigable", async ({ page }) => {
    await page.goto("/");
    const btn = page.locator(".ddb");
    await btn.focus();
    await page.keyboard.press("Enter");
    await expect(btn).toHaveAttribute("aria-expanded", "true");
    const first = page.locator(".mega .mi").first();
    await first.focus();
    await expect(first).toBeFocused();
    await page.keyboard.press("Escape");
  });

  test("stays within viewport where it is used", async ({ page }) => {
    // nav switches to the mobile menu below 1100px by design
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page.locator(".ddb").hover();
    await expect(page.locator(".ddb")).toHaveAttribute("aria-expanded", "true");
    const box = await page.locator(".mega").boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(1280);
  });
});

test.describe("mobile menu", () => {
  test("opens, locks scroll, closes on Escape", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expect(page.locator(".ddb")).toBeHidden();
    await expect(page.locator(".mtog")).toBeVisible();
    await page.locator(".mtog").click();
    await expect(page.locator("#mm")).toHaveClass(/open/);
    const locked = await page.evaluate(() => document.body.classList.contains("mm-lock"));
    expect(locked).toBe(true);
    await page.keyboard.press("Escape");
    await expect(page.locator("#mm")).not.toHaveClass(/open/);
  });
});

test.describe("whatsapp composer", () => {
  test("contact page composer builds a live message", async ({ page }) => {
    await page.goto("/contact/");
    const name = page.locator("#cfn");
    if (await name.count()) {
      await name.fill("Test Patient");
      await page.locator("#cfp").fill("9876543210");
      const bub = page.locator("#ctbub");
      await expect(bub).toContainText("Test Patient");
      await expect(bub).toContainText("9876543210");
    }
  });

  test("treatment checklist updates the message", async ({ page }) => {
    await page.goto("/treatments/bypass-surgery/");
    const box = page.locator(".tick input[type=checkbox]").first();
    if (await box.count()) {
      await box.check();
      await page.waitForTimeout(300);
      const href = await page.locator("a[href*='wa.me']").first().getAttribute("href");
      expect(href).toContain("wa.me/919111950821");
    }
  });
});

test.describe("map", () => {
  test("lazy loads on contact page", async ({ page }) => {
    await page.goto("/contact/");
    const frame = page.locator("iframe[data-src], iframe[src*='maps']");
    if (await frame.count()) {
      // iframe should not have a live maps src until scrolled near
      const src = await frame.first().getAttribute("src");
      expect(src === null || !src.includes("google")).toBeTruthy();
    }
  });
});

test.describe("consent", () => {
  test("banner appears and persists choice", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".cookie")).toBeVisible({ timeout: 5000 });
    await page.locator(".ck-ok").click();
    await expect(page.locator(".cookie")).not.toBeVisible();
    await page.reload();
    await expect(page.locator(".cookie")).not.toBeVisible();
  });
});

test.describe("404", () => {
  test("missing route shows not-found", async ({ page }) => {
    const resp = await page.goto("/no-such-page/");
    expect(resp?.status()).toBe(404);
    await expect(page.locator(".nf h1")).toBeVisible();
  });
});

test.describe("internal links", () => {
  test("all internal links return 200", async ({ page, request }) => {
    await page.goto("/");
    const links = await page.evaluate(() =>
      [...document.querySelectorAll<HTMLAnchorElement>("a[href^='/']")]
        .map((a) => a.getAttribute("href")!)
        .filter((h) => !h.startsWith("//"))
    );
    const unique = [...new Set(links)];
    for (const href of unique) {
      const r = await request.get(href);
      expect(r.status(), href).toBe(200);
    }
  });
});

test.describe("accessibility basics", () => {
  test("images have alt text", async ({ page }) => {
    for (const route of ROUTES.slice(0, 6)) {
      await page.goto(route);
      const missing = await page.evaluate(
        () =>
          [...document.querySelectorAll("img")].filter((img) => !img.hasAttribute("alt"))
            .length
      );
      expect(missing).toBe(0);
    }
  });

  test("tap targets are at least 44px", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    const small = await page.evaluate(() => {
      const bad: string[] = [];
      document.querySelectorAll<HTMLElement>(".mbar a, .mm-cta a, .btn").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.height > 0 && r.height < 44) bad.push(`${el.className}: ${r.height}`);
      });
      return bad;
    });
    expect(small).toEqual([]);
  });
});
