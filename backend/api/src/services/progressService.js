function getProgressSnapshot() {
  return {
    completedLessons: 0,
    quizAccuracy: 0,
    simulatorRuns: 0,
    streak: 0
  };
}

function updateProgressSnapshot(payload = {}) {
  return {
    completedLessons: Number(payload.completedLessons || 0),
    quizAccuracy: Number(payload.quizAccuracy || 0),
    simulatorRuns: Number(payload.simulatorRuns || 0),
    streak: Number(payload.streak || 0),
    message: "Demo progress accepted. Database persistence will be added in the Prisma phase."
  };
}

module.exports = { getProgressSnapshot, updateProgressSnapshot };
