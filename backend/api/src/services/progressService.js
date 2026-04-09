const { getPrisma } = require("../config/db");

async function getProgressSnapshot(userEmail) {
  const prisma = getPrisma();

  if (!userEmail) {
    return {
      completedLessons: 0,
      quizAccuracy: 0,
      simulatorRuns: 0,
      streak: 0,
      message: "Pass ?email=user@example.com to fetch saved progress."
    };
  }

  const email = userEmail.trim().toLowerCase();
  const user = await prisma.user.findUnique({
    where: { email },
    include: { progresses: true }
  });

  if (!user) {
    return {
      completedLessons: 0,
      quizAccuracy: 0,
      simulatorRuns: 0,
      streak: 0,
      message: "No user found for this email yet."
    };
  }

  const completedLessons = user.progresses.filter((item) => item.completed).length;
  const quizAccuracy = user.progresses.length
    ? Math.round(user.progresses.reduce((sum, item) => sum + item.quizAccuracy, 0) / user.progresses.length)
    : 0;
  const simulatorRuns = user.progresses.reduce((sum, item) => sum + item.simulatorRuns, 0);
  const streak = user.progresses.reduce((max, item) => Math.max(max, item.streak), 0);

  return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    },
    completedLessons,
    quizAccuracy,
    simulatorRuns,
    streak
  };
}

async function updateProgressSnapshot(payload = {}) {
  const prisma = getPrisma();
  const email = (payload.email || "").trim().toLowerCase();
  const lessonSlug = (payload.lessonSlug || "").trim();

  if (!email || !lessonSlug) {
    return {
      error: "Both email and lessonSlug are required."
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

  const lesson = await prisma.lesson.findUnique({
    where: { slug: lessonSlug }
  });

  if (!lesson) {
    return {
      error: `Lesson not found for slug "${lessonSlug}".`
    };
  }

  const existing = await prisma.progress.findFirst({
    where: {
      userId: user.id,
      lessonId: lesson.id
    }
  });

  const progress = existing
    ? await prisma.progress.update({
        where: { id: existing.id },
        data: {
          completed: payload.completed ?? existing.completed,
          quizAccuracy: Number(payload.quizAccuracy ?? existing.quizAccuracy),
          simulatorRuns: Number(payload.simulatorRuns ?? existing.simulatorRuns),
          streak: Number(payload.streak ?? existing.streak)
        }
      })
    : await prisma.progress.create({
        data: {
          userId: user.id,
          lessonId: lesson.id,
          completed: Boolean(payload.completed),
          quizAccuracy: Number(payload.quizAccuracy || 0),
          simulatorRuns: Number(payload.simulatorRuns || 0),
          streak: Number(payload.streak || 0)
        }
      });

  return {
    progress,
    message: "Progress saved successfully."
  };
}

module.exports = { getProgressSnapshot, updateProgressSnapshot };
