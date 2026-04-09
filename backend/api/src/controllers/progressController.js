const { getProgressSnapshot } = require("../services/progressService");

function progressController(_request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(getProgressSnapshot(), null, 2));
}

module.exports = { progressController };
