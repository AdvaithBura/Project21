var bullet;
var wall;
var thickness;
var speed;
var weight;
var damage;

function setup() {
  createCanvas(1600,400);
bullet = createSprite(50,200);
thickness=random(22,83);
wall = createSprite(1500,200,thickness,200);
speed = random(223,321);
weight = random(30,52);
bullet.velocityX = speed/20;
damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background("black"); 

if(boxTouch(bullet,wall)) {
  bullet.velocityX = 0;
   if(damage > 10){
     wall.shapeColor = "red";
   } else {
     wall.shapeColor = "green";
   }
}

  drawSprites();

  

}


