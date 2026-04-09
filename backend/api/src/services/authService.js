function createDemoUser(payload = {}) {
  return {
    id: "demo-user-001",
    name: payload.name || "Vineet Trader",
    email: payload.email || "vineet@example.com",
    plan: "learner-pro"
  };
}

function loginUser(payload = {}) {
  return {
    user: createDemoUser(payload),
    token: "demo-session-token",
    message: "Demo login successful. Real auth will be added in the next auth phase."
  };
}

function registerUser(payload = {}) {
  return {
    user: createDemoUser(payload),
    message: "Demo account created. Database persistence will be added in the Prisma phase."
  };
}

module.exports = { loginUser, registerUser };
