var express = require("express");
var burger = require("./../models/burger");

var router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data){
        var hbsObject = {
            burger: data
        }
        res.render("index", hbsObject);
    })
})

router.post('/', function(req, res) {
    burger.create(req.body.newBurger, function() {
        res.redirect('/index');
    })
})

router.put("/update/:id", function(req, res) {
    burger.update(req.params.id, function() {
        res.redirect('/index');
    })
})

router.delete("/delete/:id", function(req, res) {
    burger.delete(req.params.id, function(){
        res.redirect("/index");
    })
})

module.exports = router;