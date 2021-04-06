
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var sling1,sling2,sling3,sling4,sling5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);

	engine = Engine.create(); //World
	world = engine.world;

	bob1 = new BOB(200,400);
	bob2 = new BOB(250,400);
	bob3 = new BOB(300,400);
	bob4 = new BOB(350,400);
	bob5 = new BOB(400,400);

	roof = new ROOF(300,200,250,30);

	sling1 = new SLINGSHIT(roof.body,bob1.body);
	sling2 = new SLINGSHIT(roof.body,bob2.body);
	sling3 = new SLINGSHIT(roof.body,bob3.body);
	sling4 = new SLINGSHIT(roof.body,bob4.body);
	sling5 = new SLINGSHIT(roof.body,bob5.body);


	Engine.run(engine);
  
}


function draw() {
 
  background(232,231,228);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();
  
  sling1.display();
  sling2.display();		
  sling3.display();
  sling4.display();
  sling5.display();
}



