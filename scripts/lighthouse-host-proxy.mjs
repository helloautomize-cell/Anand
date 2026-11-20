/**
 * Local test helper: listens on :3778 and forwards to :3777 with the Host
 * header rewritten to the canonical host, so proxy.ts treats requests as
 * production-domain traffic (no X-Robots-Tag: noindex).
 * Usage: node scripts/lighthouse-host-proxy.mjs
 */
import http from "node:http";

const TARGET_PORT = 3777;
const LISTEN_PORT = 3778;
const HOST = "www.anandheartcenter.com";

http
  .createServer((req, res) => {
    const proxy = http.request(
      {
        host: "127.0.0.1",
        port: TARGET_PORT,
        path: req.url,
        method: req.method,
        headers: { ...req.headers, host: HOST },
      },
      (up) => {
        res.writeHead(up.statusCode, up.headers);
        up.pipe(res);
      }
    );
    proxy.on("error", (e) => {
      res.writeHead(502);
      res.end(String(e));
    });
    req.pipe(proxy);
  })
  .listen(LISTEN_PORT, () =>
    console.log(`host-rewrite proxy on :${LISTEN_PORT} -> :${TARGET_PORT} (Host: ${HOST})`)
  );
