//require our dependency 
var mysql = require("mysql");

//connection information..
var connection; 

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "nc_schools"
  });
}

//establish our connection
connection.connect(function(err) {
  if (err) {
     console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export our connection..
module.exports = connection;