const { loginUser, registerUser } = require("../services/authService");
const { readJsonBody } = require("../utils/readJsonBody");
const { sendJson } = require("../utils/sendJson");

async function loginController(request, response) {
  const payload = await readJsonBody(request);
  const result = await loginUser(payload);
  sendJson(response, result.error ? 404 : 200, result);
}

async function registerController(request, response) {
  const payload = await readJsonBody(request);
  const result = await registerUser(payload);
  sendJson(response, result.error ? 400 : 201, result);
}

module.exports = { loginController, registerController };
