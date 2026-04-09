const { getOverview } = require("../services/overviewService");

function overviewController(_request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(getOverview(), null, 2));
}

module.exports = { overviewController };
