
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage;
var stone;
var mango1, mango2, mango3, mango4, mango5;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	stone = new Stone(150, 200, 50, 50);
	mango1 = new Mango(150, 200, 50, 50);
	mango2 = new Mango(150, 200, 50, 50);
	mango3 = new Mango(150, 200, 50, 50);
	mango4 = new Mango(150, 200, 50, 50);
	mango5 = new Mango(150, 200, 50, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
}



