document.getElementById("button1").addEventListener("click", myclick);


function myclick() {
document.getElementById("button1").innerHTML = "hello";
var usernameInput = document.getElementById("username").value;
var mypasswortInput = document.getElementById("passwort").value;
console.log(usernameInput);
console.log(mypasswortInput);
};
  /*
function mongoInit () {
var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var dbo = db.db("mydb");

dbo.petDelete;


} */
