// Require express
const express = require("express");

//Connect to express router
const router = express.Router();

// Import model JS to use the database functions
const adopt = require("../models/cat.js");

// Route creation with logic for routes

// Route to get data
router.get();

//Route to post data
router.post();

//Route to put data
router.put();

// Route to delete data
router.delete();

//Export router for server.js to use
module.exports = router;
