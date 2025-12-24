const trips = require("../data/trips.json");

module.exports.home = (req, res) => {
  res.render("index", {
    title: "Travlr Getaways"
  });
};

module.exports.travel = (req, res) => {
  res.render("travel", {
    title: "Travel",
    trips: trips
  });
};