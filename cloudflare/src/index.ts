import { Hono } from "hono";
import { apiRoutes } from "./routes/api";
import { downloadRoutes } from "./routes/download";
import { applyCorsHeaders, applySecurityHeaders } from "./lib/http";

const app = new Hono<{ Bindings: SubStoreEnv }>();

app.onError((error, c) => {
  console.error(JSON.stringify({
    level: "error",
    method: c.req.method,
    route: c.req.path,
    requestId: c.req.header("cf-ray") || undefined,
    message: error.message,
    stack: error.stack,
  }));
  return c.json(
    {
      status: "failed",
      error: {
        code: 500,
        message: "Internal server error",
      },
    },
    500,
  );
});

app.options("*", (c) => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Sub-Store-Token",
    },
  });
});

app.route("/api", apiRoutes);
app.route("/", downloadRoutes);
// Keep these upgrade cleanup endpoints so older browser registrations
// unregister themselves after moving to the current frontend.
app.get("/sw.js", (c) =>
  c.text("self.addEventListener('install',()=>self.skipWaiting());self.addEventListener('activate',(event)=>event.waitUntil(self.registration.unregister()));", 200, {
    "content-type": "application/javascript; charset=utf-8",
    "cache-control": "no-store",
  }),
);
app.get("/registerSW.js", (c) => c.text("", 200, { "content-type": "application/javascript; charset=utf-8", "cache-control": "no-store" }));
app.notFound((c) => c.env.ASSETS?.fetch(c.req.raw) || c.text("Not Found", 404));

export default {
  async fetch(request: Request, env: SubStoreEnv, ctx: ExecutionContext) {
    const url = new URL(request.url);
    const hostname = url.hostname.toLowerCase();
    const publicDownloadHosts = (env.SUB_STORE_PUBLIC_DOWNLOAD_HOSTS || "")
      .split(",")
      .map((host) => host.trim().toLowerCase())
      .filter(Boolean);

    if (publicDownloadHosts.includes(hostname) && !url.pathname.startsWith("/download/")) {
      return applySecurityHeaders(new Response("Not Found", {
        status: 404,
        headers: {
          "cache-control": "no-store",
        },
      }));
    }

    const response = await app.fetch(request, env, ctx);
    return applySecurityHeaders(applyCorsHeaders(response, request.headers.get("origin") || undefined));
  },
} satisfies ExportedHandler<SubStoreEnv>;
