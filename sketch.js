var hr, min, sec;
var hourangle, minuteangle, secondsangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}



function draw() {
  background("black"); 
  translate(200, 200);
  rotate(-90);
  hr = hour(); 
  min = minute();
  sec = second ();
 
  secondsangle = map(sec,0,60,0,360);
  minuteangle = map(min,0,60,0,360);
  hourangle = map(hr%12, 0, 12, 0, 360);

  fill("black");
  stroke("white");
  strokeWeight(6);
  ellipse(0,0,180,180);
  

  push();
  rotate(secondsangle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  push();
  rotate(minuteangle);
  stroke("green");
  strokeWeight(5);
  line(0,0,68,0);
  pop();

  push();
  rotate(hourangle);
  stroke("yellow");
  strokeWeight(5);
  line(0,0,48,0);
  pop();

 
 //fill("transparent");

  drawSprites();
}