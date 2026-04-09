const env = {
  port: Number(process.env.PORT || 8080),
  appName: "tradelearn-api",
  environment: process.env.NODE_ENV || "development"
};

module.exports = { env };
