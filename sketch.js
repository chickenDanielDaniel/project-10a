var ship, ship_riding, edges;
var seaImage, ground; 

function preload(){
  ship_riding = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  

  sea = createSprite(200,180,400,20)
  sea.addImage("moving", seaImage)

  ship = createSprite(100,300,20,50)
  ship.addAnimation("riding", ship_riding)
  edges = createEdgeSprites()

  ship.scale = 0.2
}

function draw() {
  background("white");

 sea.velocityX = -5;

  if(sea.x < 0){
    sea.x = sea.width/2
  }
  
  drawSprites()
}