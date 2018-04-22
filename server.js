var express = require("express");
var app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("welcome");
});

app.get("/userform", function(req, res) {
  res.render("logged");
});

app.get("/register", function(req, res) {
  res.render("signed", {
    user: {
      name: req.query.name,
      email: req.query.email
    }
  });
});

app.listen(3000);

app.use(function(req, res, next) {
  res.status(404).send("Wybacz, ale coś się zepsuło");
});
