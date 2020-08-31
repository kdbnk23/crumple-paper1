var ground, paperObject
var box1, box2, box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ground=createSprite(400,690,800,5)
	paperObject=createSprite(100,680,10,10)
	box1=createSprite(330,650,200,20)
	box2=createSprite(240,600,20,100)
	box3=createSprite(420,600,20,100)
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85})
	}
}

