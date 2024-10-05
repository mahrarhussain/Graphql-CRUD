const express = require("express");
require("colors");
var { createHandler } = require("graphql-http/lib/use/express");
const expressPlayground =
  require("graphql-playground-middleware-express").default;
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const { appConfig } = require("./config");

const app = express();
const env = app.get("env");

connectDB();
app.all(
  "/graphql",
  createHandler({
    schema,
  })
);
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(appConfig.PORT, () => {
  console.log("env", env);
  console.log("appConfig", appConfig);
  console.log("listening on port ", appConfig.PORT);
});
