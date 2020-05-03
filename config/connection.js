// Require MySQL dependancy
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "yuffie",
        database: "cat_db"
    });
};

connection.connect();
module.exports = connection;


// // MySQL connection data
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "yuffie",
//     database: "cat_db"
// });

// // Connection to MySQL
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });

// // Export connection for ORM to use
// module.exports = connection;