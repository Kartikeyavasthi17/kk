
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

  ground =new Ground(800,744,4000,20);

    paper =new Paper(200,200,70);

   dustbin=new Box(1000,620,200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed()
{

if(keyCode === UP_ARROW)
{

Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80});
}

}

