
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200,30);
	mango3=new mango(900,220,30);
	mango4=new mango(1100,200,30);
	mango5=new mango(1200,150,30);
	mango6=new mango(1000,100,30);
	mango7=new mango(1200,220,30);
	mango8=new mango(1050,60,30);

	stone1= new Stone(500,500,40);

	con1= new Const(stone1.body,{x:225,y:400});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stone1.display();

  con1.display();

  groundObject.display();

  detect(stone1,mango1);
  detect(stone1,mango2);
  detect(stone1,mango3);
  detect(stone1,mango4);
  detect(stone1,mango5);
  detect(stone1,mango6);
  detect(stone1,mango7);
  detect(stone1,mango8);


	
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
	con1.fly();
}

function detect(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}