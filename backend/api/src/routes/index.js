const { healthController } = require("../controllers/healthController");
const { overviewController } = require("../controllers/overviewController");
const { lessonController } = require("../controllers/lessonController");
const { progressController } = require("../controllers/progressController");

const routes = {
  "GET /api/health": healthController,
  "GET /api/overview": overviewController,
  "GET /api/lessons": lessonController,
  "GET /api/progress": progressController
};

module.exports = { routes };
