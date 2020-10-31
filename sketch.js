var box1, box2

function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 50);
  box2 = createSprite(400, 300, 50, 50);
  box1.shapeColor = "pink";
  box2.shapeColor = "blue";
}

function draw() {
  background(10);  

  box2.x = mouseX;
  box2.y = mouseY;
  if(abs (box2.x - box1.x) < box2.width/2 + box1.width/2 && abs (box2.y - box1.y) < box2.height/2 + box1.height/2) 
 {
  box1.shapeColor = "red";
  box2.shapeColor = "red";
 }

 else {
  box1.shapeColor = "pink";
  box2.shapeColor = "blue";
 }


  drawSprites();
}