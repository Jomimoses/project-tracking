const users = require("./user.router");

module.exports = (app) => {
  app.use("/api/v1/user", users);
};
