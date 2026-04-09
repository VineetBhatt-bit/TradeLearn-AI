const { getProgressSnapshot, updateProgressSnapshot } = require("../services/progressService");
const { readJsonBody } = require("../utils/readJsonBody");
const { sendJson } = require("../utils/sendJson");

function progressController(_request, response) {
  sendJson(response, 200, getProgressSnapshot());
}

async function updateProgressController(request, response) {
  const payload = await readJsonBody(request);
  sendJson(response, 200, updateProgressSnapshot(payload));
}

module.exports = { progressController, updateProgressController };
