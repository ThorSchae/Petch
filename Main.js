/*
var circleX = 0;
var offset = 0;
var coloroffset = 0;
function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    strokeWeight(4);
    stroke(255);
    for(var x = 0; x <= mouseX; x +=50){  
      fill(random(255),random(255),random(255));
      ellipse(x, 200,25,25);
      
    }
offset = offset +1;
//colorText();
}

onmousemove = function colorText(){
    //for (var x = 0; x <= mouseX; x +=50){
       var x =  document.getElementById("test1") 
       x.style.color = '#'+ coloroffset;
    
    coloroffset = ((1<<24)*Math.random()|0).toString(16);
    document.getElementById("option1").innerHTML = coloroffset
} */
var username
var mypasswort
document.getElementById("button1").addEventListener("click", myclick);

function myclick() {
document.getElementById("button1").innerHTML = "hello";
var username = document.getElementById("username").value;
var mypasswort = document.getElementById("passwort").value;
//dbo.userAdd;
console.log(username);
console.log(mypasswort);
};
  /*
function mongoInit () {
var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var dbo = db.db("mydb");

dbo.petDelete;


} */
