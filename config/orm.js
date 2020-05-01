// Import MySQL connection
const connection = require("../config/connection.js");

//function that will take a number and create an array with that number of "?"
function printQuestionMarks(num){
    let arr = [ ];

    for (let i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}


//orm is an object that will have all SQL statements needed as functions. Key will be the function name and the value will be 
const orm = {
// function selectAll(){

// }

// function insertOne(){

// }

// function updateOne(){

// }
    
}


// Export orm object for model (cat.js);
module.exports = orm;
