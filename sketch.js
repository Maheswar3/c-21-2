var Astronaut;
var bg,bgImg;
var sleep,sleeping;
var brush,brushing;
var gyming ,gym;
var eat,eating;
var drink,drinking;
var move,moving;
function preload (){
  bgImg=loadImage ("images/iss.png");

sleep=loadImage ("images/sleep.png");

brush=loadImage ("images/brush.png");

gym =loadAnimation ("images/gym1.png","images/gym2.png");

eating=loadAnimation ("images/eat1.png","images/eat2.png");

drinking=loadAnimation ("images/drink1.png","images/drink2.png");

moving = loadAnimation ("images/move.png","images/move1.png");
}

function setup() {
createCanvas(600, 600)


bg= createSprite (300,300);
bg.addImage ("bg",bgImg);
bg.scale=0.3


Astronaut=createSprite (200,230);
Astronaut.scale=0.1;
Astronaut.addImage ("sleeping",sleep);
Astronaut.addImage("brushing",brush);
Astronaut.addAnimation("eating",eating)
Astronaut.addAnimation ("gyming",gym);
Astronaut.addAnimation ("moving",moving);
Astronaut.addAnimation ("drinking",drinking);
}

function draw() {
  background("blue");
  

  drawSprites();

  brushing();
  Gym();
  eat();
  move();

  drink();
}


function brushing(){
if (keyDown("UP_ARROW")){
 Astronaut.changeAnimation ("brushing",brush);
 Astronaut.y=350;
 Astronaut.velocityX=0;
 Astronaut.velocityY=0;
}

}
function Gym(){
  if (keyDown("DOWN_ARROW")){
   Astronaut.changeAnimation ("gyming",gym);
   Astronaut.y=350;
   Astronaut.velocityX=0;
   Astronaut.velocityY=0;
  }
  
  }
  function eat(){
    if (keyDown("lEFT_ARROW")){
     Astronaut.changeAnimation ("eating",eating);
     Astronaut.y=350;
     Astronaut.velocityX=0;
     Astronaut.velocityY=0;
    }
  }
    
    
    
   function move(){
      if (keyDown("space")){
     
       Astronaut.changeAnimation ("moving",moving);
      Astronaut.y=200;
     // Astronaut.y=100;
       Astronaut.velocityX=0;
       Astronaut.velocityY=0;
      }
      
      }
     function drink(){
        if (keyDown("Right_ARROW")){
      
         Astronaut.changeAnimation ("drinking",drinking);
         Astronaut.y=350;
         Astronaut.velocityX=0;
         Astronaut.velocityY=0;
        }
        }