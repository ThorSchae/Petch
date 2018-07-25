var circleX = 0;
var offset = 0;
function setup() {
    createCanvas(600, 400);
}

function draw() {

    strokeWeight(4);
    stroke(255);
    for(var x = 0; x <= mouseX; x +=50){  
      fill(random(255),random(255),random(255));
      ellipse(x, 200,25,25);
    }
offset = offset +1;
}
