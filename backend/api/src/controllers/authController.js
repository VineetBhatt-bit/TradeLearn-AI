const { loginUser, registerUser } = require("../services/authService");
const { readJsonBody } = require("../utils/readJsonBody");
const { sendJson } = require("../utils/sendJson");

async function loginController(request, response) {
  const payload = await readJsonBody(request);
  sendJson(response, 200, loginUser(payload));
}

async function registerController(request, response) {
  const payload = await readJsonBody(request);
  sendJson(response, 201, registerUser(payload));
}

module.exports = { loginController, registerController };
