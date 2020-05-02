// Import MySQL connection
const connection = require("../config/connection.js");

//function that will take a number and create an array with that number of "?"
function printQuestionMarks(num) {
    let arr = [ ];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    let arr = [ ];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

//orm is an object that will have all SQL statements needed as functions. Key will be the function name and the value will be 
const orm = {

    all: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    create: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        const queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    delete: function(table, condition, cb) {
        const queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};


// Export orm object for model (cat.js);
module.exports = orm;
