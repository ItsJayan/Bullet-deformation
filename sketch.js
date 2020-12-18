var bullet,wall
var bulletImage
var speed,weight
var thickness

function preload() {

  //bulletImage=loadImage("bullet.png")
  

}

function setup() {
  createCanvas(2000,400);
  bullet=createSprite(200, 200, 50, 5);
  wall=createSprite(1000,200,50,150)
  //bullet.addImage(bulletImage)
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed
  
}

function draw() {
  background('black');

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
   { bullet.velocityX=0; 
    var deformation=0.5 * weight * speed* speed/(thickness*thickness); 
    if(deformation>10) {
       bullet.shapeColor=color(255,0,0);
        } if(deformation<10)   { bullet.shapeColor=color(230,230,0); } 
   }
  
  
   


   
  drawSprites();
}