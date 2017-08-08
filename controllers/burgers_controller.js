var express = require("express");
var router = express.Router();
var burger = require("../models/burger");
var moment = require("moment");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne(["burger_name", "devoured", "date"], [req.body.burgerName, false, moment().format("YYYY-MM-DD HH:mm:ss")], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition =  "id = " + req.params.id;

  burger.updateOne({devoured: req.body.devoured}, condition, function() {
      res.redirect("/");
    });
});

module.exports = router;