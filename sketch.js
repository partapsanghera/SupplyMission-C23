var helicopterIMG, helicopterSprite, packageSprite,packageIMG, backgroundIMG, backgroundSprite;
var packageBody,ground;
var box1, box1Sprite,box2,box2Sprite, box3, box3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	backgroundIMG=loadImage("background.png")
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	
	rectMode(CENTER);

	backgroundSprite=createSprite(255, 100, width,10);
	backgroundSprite.addImage(backgroundIMG);
	backgroundSprite.scale =3;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1Sprite=createSprite(400,650, 200, 20);
	box1Sprite.shapeColor="red";
	box2Sprite=createSprite(300,610, 20, 100);
	box2Sprite.shapeColor="red";
	box3Sprite=createSprite(500,610, 20, 100);
	box3Sprite.shapeColor="red";

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	


	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
     box1 = Bodies.rectangle(400,630, 200, 20, {isStatic:true});
	 box2 = Bodies.rectangle(200,620, 20, 100, {isStatic:true});
	 box3 = Bodies.rectangle(600,640, 20, 100, {isStatic:true});
	 World.add(world,box1,box2,box3)
	
	 //Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
	 World.add(world, ground);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



