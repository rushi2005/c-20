
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
 background(r,g,b);
  // change the value of Red based on the mouse movement about the X axis
  if(World.mouseX<400)
  r=World.mouseX;
  // change the value of Green based on the mouse movement about the X axis
 if(World.mouseX>400 && World.mouseX<800)
 g=World.mouseX-400;
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 
   

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  fill("red");
  ellipse(World.mouseX,World.mouseY,10,10);
  // Remember to fill the canvas with white paint before creating the ellipse.
}