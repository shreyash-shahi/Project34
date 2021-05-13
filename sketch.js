const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine,world
var backgroundImg;
var ground,hero,slingshot,block1;

function preload() {
backgroundImg = loadImage("background1.png")
}

function setup() {
  createCanvas(2000, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000,580,2000,10);
  hero = new Hero(300,300,200);
  slingshot = new Fly(hero.body,{x:250, y:100});
 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  hero.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

