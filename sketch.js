const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;
var iron;
function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	plane = new Plane(600, height, 1200, 20);

	hammer = new Hammer(100, 100);
	
	stone = new Stone(650,200,70,70)
	rubber = new Rubber(400,300)

	sand1 = new Sand(800,300);
	sand2 = new Sand(700,300);
	sand3 = new Sand(600,300);
	sand4 = new Sand(500,300);
	sand5 = new Sand(500,300);
	sand6 = new Sand(450,300);
	sand7 = new Sand(400,300);
	sand8 = new Sand(300,300);
	sand9 = new Sand(250,300);
	sand10 = new Sand(250,300);

	iron = new Iron(550,150,70,40);
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("lightBlue");
  
	hammer.display();
	plane.display();
	stone.display();
	rubber.display();

	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	sand8.display();
	sand9.display();
	sand10.display();

	iron.display();
}



