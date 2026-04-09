function getProgressSnapshot() {
  return {
    completedLessons: 0,
    quizAccuracy: 0,
    simulatorRuns: 0,
    streak: 0
  };
}

module.exports = { getProgressSnapshot };
