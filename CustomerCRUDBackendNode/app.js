const connection = require("./connections/connection");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const CustomerController = require("./controllers/customer.controller");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/", CustomerController);

app.listen("3000", () => {
  console.log("Server Started..");
});
