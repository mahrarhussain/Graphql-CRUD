const express = require("express");
require("dotenv").config();
var { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.listen(port, () => {
  console.log("listening on port ", port);
});
