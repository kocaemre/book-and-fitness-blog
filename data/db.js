const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);



connection.connect(function(err){
    if(err){
        return console.log(err);
    }
    //connection.query("SELECT * FROM blog",(err,result) => console.log(result));
    console.log("mysql service started");
});

module.exports = connection.promise();
