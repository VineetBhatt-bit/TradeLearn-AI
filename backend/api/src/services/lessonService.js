const { getPrisma } = require("../config/db");

async function getLessons() {
  const prisma = getPrisma();
  return prisma.lesson.findMany({
    orderBy: { createdAt: "asc" }
  });
}

module.exports = { getLessons };
