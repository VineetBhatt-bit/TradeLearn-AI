const { env } = require("../config/env");

function rootController(_request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify(
      {
        name: "TradeLearn AI API",
        environment: env.environment,
        status: "running",
        docs: {
          health: "/api/health",
          overview: "/api/overview",
          lessons: "/api/lessons",
          progress: "/api/progress",
          login: "POST /api/auth/login",
          register: "POST /api/auth/register"
        }
      },
      null,
      2
    )
  );
}

module.exports = { rootController };
