var ground,player;

function preload(){
  bg1 = loadImage("background.jpg");
  playerImg = loadImage("player.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(width/2, height/2, width+100, height);
  ground.addImage(bg1);
  ground.scale =2.5;
  ground.velocityX = -2;

  ground2 = createSprite(width/2, height-20, width+100, 20);  

  player = createSprite(200, height-170);
  player.addImage(playerImg);
  player.scale = 0.5;
}

function draw() {
  background("red"); 

  //player control
  if(keyDown("space")){
    player.velocityY = -12;
  } 

//gravity
  player.velocityY += 0.5;

  if(ground.x <width/2 - 150){
    ground.x = width/2;
  }

  player.collide(ground2);
  drawSprites();
}