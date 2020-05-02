// Require express
const express = require("express");

//Connect to express router
const router = express.Router();

// Import model JS to use the database functions
const cat = require("../models/cat.js");

// Route creation with logic for routes

// Route to get data
router.get("/", function(_req, res){
    cat.all(function(data) {
        let hbsObject = {
            cats: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Route to post data
router.post("/api/cats", function(_req, res){
    cat.create([
        "name", "adopted"
    ], [
        req.body.name, req.body.adopted
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

//Route to put data
router.put("/api/cats/:id", function(_req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    cat.update({
        adopted: req.body.adopted
    }, condition, function(result) { 
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Route to delete data
router.delete("/api/cats/:id", function(_req, res) {
    let condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export router for server.js to use
module.exports = router;
