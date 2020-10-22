
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var border1;
var border2;
var border3;

var ground;
var ground1;

var dustbin1;

function preload(){
     dustbin1 = loadImage("sprites/dustbin3.png");
}

function setup() {
	var canvas = createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	var ground = Bodies.rectangle(400,650,800,5, {isStatic:true});
	World.add(world,ground)
	var ground1 = createSprite(400,650,800,5);
	
	
	border1 = new dustbin(480,600,100,PI/4);
	border2 = new dustbin(565,640,180,PI/0.035);
	border3 = new dustbin(650,600,100,PI/4);

	dustbin1 = createSprite(565,600,180,100);


	//Create the Bodies Here.
	ball = new paper(100,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  border1.display();
  border2.display();
  border3.display();

  ball.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}


