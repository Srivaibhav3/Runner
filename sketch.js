var runner;
var ground;

function preload(){
  //pre-load images
  loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner=createSprites(200,100);
  runner.addAnimation()
}

function draw() {
  background(0);
  drawSprites();
}
