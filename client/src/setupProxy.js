const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/testRoute", {
      target: "http://localhost:3010"
    })
  );
  app.use(
    proxy("/api/*", {
      target: "http://localhost:3010"
    })
  );
};
