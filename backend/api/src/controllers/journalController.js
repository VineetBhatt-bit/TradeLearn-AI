const { listJournalEntries, createJournalEntry } = require("../services/journalService");
const { readJsonBody } = require("../utils/readJsonBody");
const { sendJson } = require("../utils/sendJson");

async function journalListController(request, response) {
  const url = new URL(request.url, "http://localhost");
  const email = url.searchParams.get("email");
  const result = await listJournalEntries(email);
  sendJson(response, 200, result);
}

async function journalCreateController(request, response) {
  const payload = await readJsonBody(request);
  const result = await createJournalEntry(payload);
  sendJson(response, result.error ? 400 : 201, result);
}

module.exports = { journalListController, journalCreateController };
