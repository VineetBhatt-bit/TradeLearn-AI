const { getProgressSnapshot, updateProgressSnapshot } = require("../services/progressService");
const { readJsonBody } = require("../utils/readJsonBody");
const { sendJson } = require("../utils/sendJson");

async function progressController(request, response) {
  const url = new URL(request.url, "http://localhost");
  const email = url.searchParams.get("email");
  const result = await getProgressSnapshot(email);
  sendJson(response, result.error ? 400 : 200, result);
}

async function updateProgressController(request, response) {
  const payload = await readJsonBody(request);
  const result = await updateProgressSnapshot(payload);
  sendJson(response, result.error ? 400 : 200, result);
}

module.exports = { progressController, updateProgressController };
