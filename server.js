// Require express, dependancy
const express = require("express");

// Set port for application
const PORT = process.env.PORT || 8080;

// Create an instance of the express app
const app = express();

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
const routes = require("./controllers/cat_controller.js");

app.use(routes);

// Start server so it begins listening for client requests
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})