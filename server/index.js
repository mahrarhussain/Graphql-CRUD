const express = require("express");
require("dotenv").config();
var { createHandler } = require("graphql-http/lib/use/express");
const expressPlayground =
  require('graphql-playground-middleware-express').default;
const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

const app = express();

app.all(
  "/graphql",
  createHandler({
    schema,
  })
);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

app.listen(port, () => {
  console.log("listening on port ", port);
});
