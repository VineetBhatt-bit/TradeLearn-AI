const { getPrisma } = require("../config/db");
const { defaultLessons } = require("./lessonCatalog");

async function ensureSeedData() {
  const prisma = getPrisma();

  for (const lesson of defaultLessons) {
    await prisma.lesson.upsert({
      where: { slug: lesson.slug },
      update: lesson,
      create: lesson
    });
  }
}

module.exports = { ensureSeedData };
