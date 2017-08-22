var express = require("express");
var burger = require("./../models/burger");

var router = express.Router();

var db = require("../models");
db.sequelize.sync();

router.get('/', function(req, res) {
    db.Burger.findAll({
        order: [
            ["id", "ASC"]
        ]
    }).then(function(data){
        var hbsObject = {
            burger: data
        }
        res.render("index", hbsObject);
    })
})

router.post('/', function(req, res) {
    db.Burger.create({
        burger_name: req.body.newBurger
    }).then(function() {
        res.redirect('/index');
    })
})

router.put("/:id", function(req, res) {
    db.Burger.update({ 
            devoured: true
        },
        { where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/index');
    })
})

router.delete("/:id", function(req, res) {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
     }).then(function(){
        res.redirect("/index");
    })
})

module.exports = router;