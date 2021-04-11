var canvas;
var music;
var box1,box2,box3,box4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite(0,580,360,30)
box1.shapeColor="blue";
box2=createSprite(295,580,200,30)
box2.shapeColor="green";
box3=createSprite(515,580,200,30)
box3.shapeColor="pink";
box4=createSprite(740,580,220,30)
box4.shapeColor="yellow";
ball=createSprite(random(20,750),100,30,30)
ball.shapeColor="white"; 
ball.velocityX=4;
ball.velocityY=8;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges= createEdgeSprites();

    ball.bounceOff(edges);
if (ball.isTouching(box1)&& ball.bounceOff(box1)){
  ball.shapeColor="blue"  
music.play();
}
if (ball.isTouching(box2)&& ball.bounceOff(box2)){
    ball.shapeColor="green"  
  }
  if (ball.isTouching(box3)&& ball.bounceOff(box3)){
    ball.shapeColor="pink"  
  }
  if (ball.isTouching(box4)&& ball.bounceOff(box4)){
    ball.shapeColor="yellow";  
ball.velocityX=0; 
ball.velocityY=0; 
music.stop();
}
  
  
  
  drawSprites();
}
