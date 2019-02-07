this.petInsert = dbo.collection("pets").insertOne(myobj, function(err, res) {
if (err) throw err;
console.log("1 document inserted");
});