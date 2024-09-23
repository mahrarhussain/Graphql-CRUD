const express = require("express");
require("dotenv").config();
var { createHandler } = require("graphql-http/lib/use/express");
const port = process.env.PORT || 5000;

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
);
app.listen(port, () => {
  console.log("listening on port ", port);
});
