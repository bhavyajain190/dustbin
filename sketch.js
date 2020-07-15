const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var ball1,ground,dustbin,launcher;
var world,launchingForce=100,lastMouseX=null,lastMouseY=null;

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
  ball1 = new ball(200,450,70);
  ground = new Ground(width/2,670,width,20);
  launcher = new Launcher(ball1.body,{x:300,y:300});
  dustbin = new Dustbin(1200,650);
  
  
 
  
Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground.display();
  dustbin.display();
  launcher.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
    launcher.fly();
    }

