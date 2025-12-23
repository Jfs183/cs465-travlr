module.exports.home = (req, res) => {
  res.render("index", {
    title: "Travlr Getaways"
  });
};