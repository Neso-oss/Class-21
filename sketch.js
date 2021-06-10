var movingRect,fixedRect,movingRect2,fixedRect2
function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 200, 50, 50);
 movingRect = createSprite(100,100,50,60);
 fixedRect.shapeColor = "red";
 movingRect.shapeColor = "red";
 fixedRect2= createSprite(300, 200, 50, 50);
 movingRect2 = createSprite(300,100,50,60);
 fixedRect2.shapeColor = "red";
 movingRect2.shapeColor = "red";
 movingRect2.velocityY = 6;
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
 if(isTouching(movingRect,fixedRect)){
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
 }
 else {
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
 }
 if(isTouching(movingRect2,fixedRect2)){             
  fixedRect2.shapeColor = "green";
  movingRect2.shapeColor = "green";
 }
 else {
  fixedRect2.shapeColor = "red";
  movingRect2.shapeColor = "red";
 }
  drawSprites();
}

