const { getPrisma } = require("../config/db");

async function loginUser(payload = {}) {
  const prisma = getPrisma();
  const email = (payload.email || "").trim().toLowerCase();

  if (!email) {
    return {
      error: "Email is required to log in."
    };
  }

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return {
      error: "User not found. Register first."
    };
  }

  return {
    user,
    token: `session-${user.id}`,
    message: "Login successful."
  };
}

async function registerUser(payload = {}) {
  const prisma = getPrisma();
  const email = (payload.email || "").trim().toLowerCase();
  const name = (payload.name || "TradeLearn User").trim();

  if (!email) {
    return {
      error: "Email is required to register."
    };
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name,
      plan: payload.plan || "learner"
    },
    create: {
      email,
      name,
      plan: payload.plan || "learner"
    }
  });

  return {
    user,
    message: "Account saved successfully."
  };
}

module.exports = { loginUser, registerUser };
