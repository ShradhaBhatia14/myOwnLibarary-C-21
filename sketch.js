var fixedRect, movingRect,jumpingRect, sleepingRect ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=5;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  jumpingRect = createSprite(400,400,60,20);
  jumpingRect.shapeColor="green";
  
  sleepingRect=createSprite(400,200,20,60);
  sleepingRect.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
/*
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red"; 
    fixedRect.shapeColor =  "red";
  }else{
    movingRect.shapeColor = "green"; 
    fixedRect.shapeColor =  "green";
  }
  */
  if(isTouching(movingRect,jumpingRect)){
movingRect.shapeColor="pink";
jumpingRect.shapeColor="pink";
 } else {
  movingRect.shapeColor = "green"; 
  jumpingRect.shapeColor =  "green";

 }
 /*
if(isTouching(movingRect,sleepingRect)){
movingRect.shapeColor="blue";
sleepingRect.shapeColor="blue";
} else{
  movingRect.shapeColor = "green"; 
 sleepingRect.shapeColor =  "green"

}
*/
bounceOff(movingRect,fixedRect);
  drawSprites();
}


