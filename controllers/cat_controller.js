
var express = require("express");
var router = express.Router();

var cat = require("../models/cat.js");

router.get("/", function(req, res){
    cat.all(function(data) {
        let hbsObject = {
            cats: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/cats", function(req, res){
    cat.create(["name", "adoptable"], [req.body.name, req.body.adoptable], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/cats/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    cat.update({
        adoptable: req.body.adoptable
    }, condition, function(result) { 
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/cats/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
