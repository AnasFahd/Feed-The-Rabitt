var garden,rabbit;
var gardenImg,rabbitImg,appleImage,leavesImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  leavesImage = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

var select_sprites = Math.round(random(1,2));

if(frameCount % 80 == 0){
if(select_sprites == 1){
  createApples();
}
else{
  createLeaves();
}
}
  rabbit.x=World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples(){

  apple=createSprite(random(50,350),40,10,10);
  apple.velocityY=3;
  apple.lifetime=70;
  apple.addImage(appleImage);
  apple.scale=0.09;

}

function createLeaves(){

  leaves=createSprite(random(50,350),40,10,10);
  leaves.velocityY=3;
  leaves.lifetime=70;
  leaves.addImage(leavesImage);
  leaves.scale=0.09;

}