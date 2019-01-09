const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);
const port = 4000;
const host = "172.18.0.2";
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(morganToolkit());
/**
 * Routes
 */
const products = require("./Routers/products");
app.use("/products", products);
app.use("*", (req, res) => res.end());
/**
 * End routes
 */
app.listen.apply(app, [port, host]);
console.log(`Server started on: http://${host}:${port}\n`);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err.stack) {
    err = err.stack;
  }
  res.json(err);
});
