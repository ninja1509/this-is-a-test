
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob (400,350,45);
	bob2 = new Bob (445,350,45);
	bob3 = new Bob (355,350,45);
	bob4 = new Bob (490,350,45);
	bob5 = new Bob (310,350,45);
	roof = new Roof (535,150,800,20);
	rope1 = new Rope (bob1.body,{x:400,y:150});
	rope2 = new Rope (bob2.body,{x:445,y:150});
	rope3 = new Rope (bob3.body,{x:355,y:150});
	rope4 = new Rope (bob4.body,{x:490,y:150});
	rope5 = new Rope (bob5.body,{x:310,y:150});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();

  keyPressed();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-1000,y:3000});
	}
}



