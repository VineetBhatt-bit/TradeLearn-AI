const { rootController } = require("../controllers/rootController");
const { healthController } = require("../controllers/healthController");
const { overviewController } = require("../controllers/overviewController");
const { lessonController } = require("../controllers/lessonController");
const { progressController, updateProgressController } = require("../controllers/progressController");
const { loginController, registerController } = require("../controllers/authController");

const routes = {
  "GET /": rootController,
  "GET /api/health": healthController,
  "GET /api/overview": overviewController,
  "GET /api/lessons": lessonController,
  "GET /api/progress": progressController,
  "POST /api/progress": updateProgressController,
  "POST /api/auth/login": loginController,
  "POST /api/auth/register": registerController
};

module.exports = { routes };
