const { loadEnv } = require("./config/loadEnv");
const http = require("http");
const { env } = require("./config/env");
const { routes } = require("./routes");
const { ensureSeedData } = require("./services/bootstrapService");
const { sendJson } = require("./utils/sendJson");

loadEnv();

function applyCorsHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function createRouteKey(request) {
  const pathname = new URL(request.url, "http://localhost").pathname;
  return `${request.method} ${pathname}`;
}

const server = http.createServer((request, response) => {
  applyCorsHeaders(response);

  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  const routeHandler = routes[createRouteKey(request)];

  if (routeHandler) {
    Promise.resolve(routeHandler(request, response)).catch((error) => {
      sendJson(response, 500, {
        error: "Internal server error",
        detail: error.message
      });
    });
    return;
  }

  sendJson(response, 404, {
    error: "Not found",
    availableRoutes: Object.keys(routes)
  });
});

ensureSeedData()
  .then(() => {
    server.listen(env.port, () => {
      console.log(`${env.appName} running on http://localhost:${env.port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to bootstrap database seed data.", error);
    process.exit(1);
  });
