var MongoClient = require ('mongodb').MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var myobj = {name: "name2", art: "katze", alter: 7 , adresse: "musterhausen"};
var myobjUser = {name: "Richter" , passwort:: "Hans"};
var myobj2 = [
{name: "hans", art: "hund", alter: 2 , adresse: "münchen"},
{name: "franz", art: "hund", alter: 4, adresse: "berlin"},
{name: "peter", art: "katze" , alter: 1, adresse: "bremen"}
];
//erzeugen der Tabellen
dbo.createCollection("pets", function(err, res){
if (err) throw err;
console.log("Collection created");
})
dbo.createCollection("users", function(err, res){
if (err) throw err;
console.log("Collection created");
})
dbo.createCollection("shelters", function(err, res){
if (err) throw err;
console.log("Collection created");
})



 // Pet hinzufügen funktion einzeln

dbo.petInsert = dbo.collection("pets").insertOne(myobj, function(err, res) {
  if (err) throw err;
  console.log("1 document inserted");
  })
// pet hinzufügen multi


dbo.collection("pets").insertMany(myobj2, function(err, res){
if (err) throw err;
console.log(res.insertedCount + "eingefügt");
db.close();
})



// pet löschen nach  kategorie
var myquery = {art: "katze"};
dbo.petDelete = dbo.collection("pets").deleteMany(myquery, function(err, obj){
if (err) throw err;
console.log(obj.result.n +" deleted" );
})

// user anlegen
dbo.petInsert = dbo.collection("users").insertOne(myobjUser, function(err, res) {
  if (err) throw err;
  console.log("1 document inserted");
  })

//dbo.petInsert;
dbo.petDelete;
dbo.userAdd
db.close();
});



//new  version




