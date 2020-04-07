const users = require("./user.router");
const project = require("./project.router");

module.exports = (app) => {
  app.use("/api/v1/user", users);
  app.use("/api/v1/project", project);
};
