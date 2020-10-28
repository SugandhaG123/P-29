const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var ground1,polygon1;
var sling,ground2;




function setup(){
     createCanvas(1200,300);
    engine = Engine.create();
    world = engine.world;

    polygon1 = new polygon(100,100,20);

    ground1 = new Ground(450,235,150,20);

    block1 = new block(500,300,30,40);
    block2 = new block(530,300,30,40);
    block3 = new block(560,300,30,40);
    block4= new block(590,300,30,40);
    block5 = new block(620,300,30,40);
    block6 = new block(500,320,30,40);
    block7 = new block(530,320,30,40);

    block8 = new block(390,205,30,40);
    block9 = new block(420,205,30,40);
    block10 = new block(450,205,30,40);
    block11= new block(480,205,30,40);
    block12 = new block(510,205,30,40);
    block13 = new block(420,165,30,40);
    block14 = new block(450,165,30,40);
    block15= new block(480,165,30,40);
    block16= new block(450,125,30,40);
    sling=new launcher(polygon1.body,{x:100,y:100});
    ground2 = new Ground(500,290,1900,20);

 
   


 
}

function draw(){
    
    background("black");
    Engine.update(engine);
    
    ground1.display();
    
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    polygon1.display();
    sling.display();
    ground2.display();

   
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


