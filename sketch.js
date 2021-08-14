const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;


var engine, world;
var backgroundImg;
var snowFlakes = [];
var boyImg, boyRunning_Img;
var boy;
var boy2;
var invisibleGround;




function preload(){
  backgroundImg = loadImage("367252.jpeg");
  boyRunning_Img = loadAnimation("Boy1.png", "Boy2.png", "Boy3.png", "Boy4.png", "Boy5.png", "Boy6.png");
  boyImg = loadImage("Boy7.png");
  boy2Img = loadImage("Boy3.png");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  boy = createSprite(700, 300, 20, 20);
  boy.addImage("Jumping", boyImg);
  boy.scale = 0.4;

  boy2 = createSprite(200, 310, 20, 20);
  boy2.addAnimation("Running",boyRunning_Img);
  boy2.scale = 0.4;

  invisibleGround = createSprite(400,380,800,35);
  invisibleGround.visible = false;

  

  
}

function draw() {
  background(backgroundImg);  



  keyPressed();

  boy.velocityY = boy.velocityY + 0.8

  boy.collide(invisibleGround);

  if(keyDown("RIGHT_ARROW")) {
    boy2.x = boy2.x+5;
  }
  else{
    boy2.changeAnimation("Running",boy2Img);
  }

  if (frameCount % 60 === 0){
    snowFlakes.push(new Snow(random(0,800),0));
  }
  
  console.log("SnowFlakes_Length" + snowFlakes.length);

  for(var k = 0; k < snowFlakes.length; k++){
    snowFlakes[k].display();
  }  

  drawSprites();
}

function keyPressed(){
  if(keyCode === 32 && boy.y >= 300) {
    boy.velocityY = -12;
  }

}
