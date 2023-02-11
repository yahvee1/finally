var backGround,rocket,rock1,rock2,rock3,ufo;
var bgImg,rocketImg,r1Img,r2Img,r3Img,ufoImg,gameOverImg;
var Score = 0;
var r1G,r2G,r3G,ufoGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  bgImg = loadImage("ezgif.com-gif-maker.jpg");
  rocketImg = loadImage("rocket-removebg-preview.png");
  r1Img = loadImage("r1.png");
  r2Img = loadImage("r2.png");
  r3Img = loadImage("r3.png");
  ufoImg = loadImage("ufo-removebg-preview.png");
  gameOverImg =loadAnimation("gameOver-removebg-preview.png");
  
}

function setup(){
   createCanvas(windowWidth, windowHeight);
//create the canvas and adjust the window sizes to suit the device 

backGround=createSprite(width/2,200);
backGround.addImage(bgImg);
backGround.velocityY = 4;


//creating boy running
rocket = createSprite(width/2,height-20,20,20);
rocket.addImage("rocketflying",rocketImg);
rocket.scale=0.30;
 
  
r1G=new Group();
r2G=new Group();
r3G=new Group();
ufoGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  rocket.x = World.mouseX;
  
  edges= createEdgeSprites();
  rocket.collide(edges);
  
  //code to reset the background
  if(backGround.y>height){
    backGround.y = height/2;
  }
     if(touches.length>0 || keyDown("SPACE")) {      
      restart();
      touches = []
    }
    createRock1();
    createRock2();
    createRock3();
    createUfo();

    if (r1G.isTouching(rocket)) {
      r1G.destroyEach();
      Score=Score + 50;
      
    }
    else if (r2G.isTouching(rocket)) {
      r2G.destroyEach();
      Score=Score + 100;
      
    }else if(r3G.isTouching(rocket)) {
      r3G.destroyEach();
      Score= Score + 150;
      
      // u need to add ufo in swordG
    }else{
      if(ufoGroup.isTouching(rocket)) {
        gameState=END;
        
        rocket.addAnimation("rocketflying",gameOverImg);
        rocket.x=width/2;
        rocket.y=height/2;
        rocket.scale=0.6;
        
        r1G.destroyEach();
        r2G.destroyEach();
        r3G.destroyEach();
        ufoGroup.destroyEach();
        
        r1G.setVelocityYEach(0);
        r2G.setVelocityYEach(0);
        r3G.setVelocityYEach(0);
        ufoGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Score: "+ Score,width-150,30);
  }

}

function createRock1() {
  if (World.frameCount % 200 == 0) {
   // Modify the positions of cash 
    var r1 = createSprite(Math.round(random(width-100, height-50),40, 10, 10));
    r1.addImage(r1Img);
  r1.scale=0.60
  r1.velocityY = 5;
  r1.lifetime = 200;
  r1G.add(r1);
  }
}

function createRock2() {
  if (World.frameCount % 320 == 0) {
       // Modify the positions of diamonds 

    var r2 = createSprite(Math.round(random(width-50, height-350),40, 10, 10));
    r2.addImage(r2Img);
  r2.scale=0.60;
  r2.velocityY = 5;
  r2.lifetime = 200;
  r2G.add(r2);
}
}



function createUfo() {
  if (World.frameCount % 410 == 0) {
    //   Modify the positions of jwellery to make them spawn throughout the available screen size.

    var ufo = createSprite(Math.round(random(width-150,height-150),40, 10, 10));
    ufo.addImage(ufoImg);
  ufo.scale=0.30;
  ufo.velocityY = 5;
  ufo.lifetime = 200;
  ufoGroup.add(ufo);
  }
}
function createRock3() {
  if (World.frameCount % 410 == 0) {
    //   Modify the positions of jwellery to make them spawn throughout the available screen size.

    var r3 = createSprite(Math.round(random(width-150,height-150),40, 10, 10));
    r3.addImage(r3Img);
  r3.scale=0.60;
  r3.velocityY = 5;
  r3.lifetime = 200;
  r3G.add(r3);
  }
}


function restart(){
  gameState === PLAY;
   
}