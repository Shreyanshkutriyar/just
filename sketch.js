var starImg, fairyImg, bgImg,  edges;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadImage("Girl.png");
	bgImg = loadImage("butterFly.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 700);



	fairy = createSprite(130, 520);
	fairy.addAnimation(fairyImg);  
	fairy.scale =1.9;
	edges = createEdgeSprites();
  
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	var star_option = {
		restitution:0.5
	}
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x = starBody.position.x
  star.y = starBody.position.y


  

  fairyVoice.play();
  fairy.collide(edges[1])

if(star.y > 470 && starBody.position.y> 470){

	Matter.Body.setStatic(starBody, true);
	
}

  drawSprites();
}

function keyPressed() {
	
	//write code here
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
 }
 
	 if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
 }

 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(starBody,false); 
 }
 
}
