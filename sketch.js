const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var options;
var leftSide, rightSide, bottomSide;
var leftBody, rightBody, bottomBody;
var boxPosition, boxY;

function preload() {
	
}

function setup() {
	createCanvas(1300, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxPosition = 1000;
	boxY = 420;

	leftSide = createSprite(boxPosition,boxY,20,100);
	leftSide.shapeColor = "white";
	leftBody = Bodies.rectangle(boxPosition+20,boxY,20,100,{isStatic: true});
	World.add(world, leftBody);

	rightSide = createSprite(boxPosition+200,boxY,20,100);
	rightSide.shapeColor = "white";
	rightBody = Bodies.rectangle(boxPosition+200,boxY,20,100,{isStatic: true});
	World.add(world, rightBody);

	bottomSide = createSprite(boxPosition+100,boxY+40,200,20);
	bottomSide.shapeColor = "white";
	bottomBody = Bodies.rectangle(boxPosition+100,boxY+40,200,20,{isStatic: true});
	World.add(world, bottomBody);

	paperObject = new Paper(200,450,40,options);
	ground = new Ground(700,480,1500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paperObject.display();
  ground.display();

  //paperObject.collide(ground);
  
  keyPressed();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:65,y:-85});
	}
}