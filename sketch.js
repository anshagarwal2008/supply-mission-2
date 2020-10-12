var car,wall;
var speed,weight;

function setup() {
  createCanvas(1300,400);
  car=createSprite(50, 200, 50, 20);

  wall=createSprite(1200,200,60,height/2);

  speed=random(55,90);
  car.velocityX=speed ;
  weight=random(400,1500);



function draw() {
  background("red");
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=.6*weight*speed*speed/22509;
    if(deformation>180)
    {
   car.shapecolour=colour(255,0,0);
    }
    if(deformation<180 && deformation>100)
   {
     car.shapecolour=colour(255,0,0);
   }
   if(deformation<100)
   {
     car.shapecolour=colour(0,255,0);
   }
  }
}  
  drawSprites();
}