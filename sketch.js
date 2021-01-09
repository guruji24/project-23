var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  box1 = new Box(200,610,30,100);
  box2 = new Box(600,610,30,100);
  box3 = new Box(400,645,370,30)

  if(keyDown("right")){
	helicopterSprite.x = helicopterSprite.x+50;
	packageSprite.x = packageSprite.x+50;
	packageBody.x = packageBody.x+50;
	
}

if(keyDown("left")){
  helicopterSprite.x = helicopterSprite.x-50;
  packageSprite.x = packageSprite.x-50;
  packageBody.x = packageBody.x-50;
  
}

  drawSprites();
 
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
  }
  

}


