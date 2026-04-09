const { getLessons } = require("../services/lessonService");
const { sendJson } = require("../utils/sendJson");

async function lessonController(_request, response) {
  const items = await getLessons();
  sendJson(response, 200, { items });
}

module.exports = { lessonController };
