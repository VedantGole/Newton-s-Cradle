
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var topOBJ; 
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the Roof
	roof = new Roof(400, 200, 500, 40);

	//creating the bobs
	bob1 = new Bob(220, 650, 40);
	bob2 = new Bob(300, 650, 40);
	bob3 = new Bob(380, 650, 40);
	bob4 = new Bob(460, 650 ,40);
	bob5 = new Bob(540, 650, 40);

	//creating the wires for the bobs to be suspended
	chain1 = new Chain(bob1.body, roof.body, -bob1.radius*4.4, 0);
	chain2 = new Chain(bob2.body, roof.body, -bob2.radius*2.4, 0);
	chain3 = new Chain(bob3.body, roof.body, -bob3.radius*0.4, 0);
	chain4 = new Chain(bob4.body, roof.body, bob4.radius*1.6, 0);
	chain5 = new Chain(bob5.body, roof.body, bob5.radius*3.4, 0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x : -85, y : -85});
	}
}



