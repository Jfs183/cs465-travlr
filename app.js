const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app_server", "views"));

app.use(express.static(path.join(__dirname, "public")));

const routes = require("./app_server/routes/index");
app.use("/", routes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});