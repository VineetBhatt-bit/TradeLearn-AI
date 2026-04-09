const { getLessons } = require("../services/lessonService");

function lessonController(_request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ items: getLessons() }, null, 2));
}

module.exports = { lessonController };
