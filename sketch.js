var a, b;
var movingRect , fixedRect;
var car , wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,400,30,15)
  car.shapeColor = "red"
  car.velocityX = 4

  wall = createSprite(1000,400,15,50);
  wall.shapeColor = "blue"


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(car,wall)){
     car.shapeColor = "orange"
     wall.shapeColor = "green"
  }
  



  bounceOff(car,wall)
  drawSprites();
}

function isTouching(a,b){

  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
   return true;
}
else {
   return false;
}
}

function bounceOff(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
  && b.x - a.x < b.width/2 + a.width/2){
     a.velocityX = (-1)*a.velocityX;
  }
  else if(a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2){
     a.velocityY = (-1)*a.velocityY

    }
  


}





















































