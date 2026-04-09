const http = require("http");
const { env } = require("./config/env");
const { routes } = require("./routes");
const { sendJson } = require("./utils/sendJson");

function createRouteKey(request) {
  return `${request.method} ${request.url}`;
}

const server = http.createServer((request, response) => {
  const routeHandler = routes[createRouteKey(request)];

  if (routeHandler) {
    routeHandler(request, response);
    return;
  }

  sendJson(response, 404, {
    error: "Not found",
    availableRoutes: Object.keys(routes)
  });
});

server.listen(env.port, () => {
  console.log(`${env.appName} running on http://localhost:${env.port}`);
});
