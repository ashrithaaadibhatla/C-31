//types of data structures-var,let,array,etc...
//var A=43, 82, var can only store one value at a time
//data types can only be 5
//1. String data type
var A="string"
//2. Number data type
var B=43
//3. Boollean data type- true,false
var C=true;
//4. Undefine data type
var D
//5. Nulldefine data type
var E=null;
console.log(A);


//array data structure can store multiple valuses in the same varible
var Ash=[1,2, "blue,",true,null]
Ash.push("ashrithaa");
Ash.pop();
console.log(Ash);
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "play"

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState === "play"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    

}


function mouseReleased(){
    slingshot.fly();
    gameState = "End"
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}