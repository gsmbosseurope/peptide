/**
 * Local static file server for trusted-peptide.com (the public site).
 *
 * Run with: node dev-server.js   (from the project root)
 * Then open: http://localhost:5500  or  http://<your-LAN-IP>:5500 on your phone.
 *
 * Plain Node http server, no dependencies — handles many concurrent requests
 * (unlike `python -m http.server`, which is single-threaded and can stall or
 * blank out on mobile browsers loading dozens of assets at once).
 *
 * Port 5500 matches the existing Windows Firewall inbound rule
 * ("Peptides-Labs Dev Server") so no admin rights are needed to reach it
 * from another device on the LAN.
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5500;
const ROOT = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.normalize(path.join(ROOT, urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found: " + urlPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`trusted-peptide.com dev server running:`);
  console.log(`  Local:   http://localhost:${PORT}`);
  console.log(`  Network: http://<your-LAN-IP>:${PORT}`);
});
