const { getHealthStatus } = require("../services/healthService");

function healthController(_request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(getHealthStatus(), null, 2));
}

module.exports = { healthController };
