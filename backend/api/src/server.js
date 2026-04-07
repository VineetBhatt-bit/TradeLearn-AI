const http = require("http");

const routes = {
  "/api/health": {
    status: "ok",
    service: "tradelearn-api",
    message: "Backend scaffold is running."
  },
  "/api/overview": {
    modules: [
      "auth",
      "users",
      "lessons",
      "quizzes",
      "simulator",
      "journal",
      "watchlist",
      "notifications",
      "admin"
    ]
  }
};

const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "application/json");

  if (routes[request.url]) {
    response.writeHead(200);
    response.end(JSON.stringify(routes[request.url], null, 2));
    return;
  }

  response.writeHead(404);
  response.end(
    JSON.stringify(
      {
        error: "Not found",
        available: Object.keys(routes)
      },
      null,
      2
    )
  );
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`TradeLearn API scaffold running on http://localhost:${port}`);
});
