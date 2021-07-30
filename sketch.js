var starImg,bgImg;
var star, starBody;
//Variable para el sprite del hada y fairyImg
//var fairy, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//Animación del hada
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
    fairyVoice = loadSound("JoyMusic.mp3"); 
}

function setup() {
	createCanvas(800, 750);
	
	//crea el sprite del hada, y agrega la animación para el hada
    fairy = createSprite(130,520);
	fairy.scale = 0.5;
	fairy.addAnimation("fairy",fairyImg);
 

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //Código para detener la estrella en la mano del hada
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	//Reproducir el sonido fairyVoice
    fairyVoice.play();

	//escribe el código para mover al hada a la izquierda y derecha
	if (keyCode===RIGHT_ARROW){

		fairy.x = fairy.x + 20;
	}

	if (keyCode===LEFT_ARROW){

		fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

}
