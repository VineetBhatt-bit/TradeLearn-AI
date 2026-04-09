function getHealthStatus() {
  return {
    status: "ok",
    service: "tradelearn-api",
    environment: process.env.NODE_ENV || "development",
    message: "Backend API scaffold is running."
  };
}

module.exports = { getHealthStatus };
