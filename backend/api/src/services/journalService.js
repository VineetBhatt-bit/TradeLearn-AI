const { getPrisma } = require("../config/db");

async function listJournalEntries(userEmail) {
  const prisma = getPrisma();

  if (!userEmail) {
    return {
      items: [],
      message: "Pass ?email=user@example.com to fetch saved journal entries."
    };
  }

  const email = userEmail.trim().toLowerCase();
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      journals: {
        orderBy: { createdAt: "desc" }
      }
    }
  });

  if (!user) {
    return {
      items: [],
      message: "No user found for this email yet."
    };
  }

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    },
    items: user.journals
  };
}

async function createJournalEntry(payload = {}) {
  const prisma = getPrisma();
  const email = (payload.email || "").trim().toLowerCase();
  const content = (payload.content || "").trim();

  if (!email || !content) {
    return {
      error: "Both email and content are required."
    };
  }

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      name: payload.name || "TradeLearn User"
    },
    create: {
      email,
      name: payload.name || "TradeLearn User",
      plan: "learner"
    }
  });

  const journal = await prisma.journal.create({
    data: {
      userId: user.id,
      content,
      tags: payload.tags || null
    }
  });

  return {
    journal,
    message: "Journal entry saved successfully."
  };
}

module.exports = { listJournalEntries, createJournalEntry };
