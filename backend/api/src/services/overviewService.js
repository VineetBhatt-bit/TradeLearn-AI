function getOverview() {
  return {
    modules: [
      "auth",
      "users",
      "lessons",
      "progress",
      "quizzes",
      "simulator",
      "journal",
      "watchlist",
      "notifications",
      "admin"
    ],
    nextPhases: ["database", "auth", "lesson engine", "progress persistence"]
  };
}

module.exports = { getOverview };
