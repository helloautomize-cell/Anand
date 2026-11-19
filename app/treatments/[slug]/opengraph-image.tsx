import { ImageResponse } from "next/og";
import { loadTreatments } from "@/lib/content";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamicParams = false;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = loadTreatments().find((x) => x.slug === slug);
  const title = t?.name ?? "Heart surgery";
  const desc = (t?.description ?? "").split(":")[0];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06333d",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#dce8ea",
            fontSize: 30,
            letterSpacing: 1,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 7,
              background: "#d23133",
            }}
          />
          {site.brand}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#ff9a9b",
              fontSize: 26,
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            Treatment guide
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 34 ? 64 : 78,
              fontWeight: 600,
              lineHeight: 1.05,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          <div style={{ color: "#dce8ea", fontSize: 30, maxWidth: 900 }}>
            {desc}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#9db8bc",
            fontSize: 26,
          }}
        >
          <span>{`${site.doctor.name} · ${site.doctor.role}`}</span>
          <span>anandheartcenter.com</span>
        </div>
      </div>
    ),
    size
  );
}
