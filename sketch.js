var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var particle;
//var turn = 5;
var divisions = [];
var ground = [];

var gameState = PLAY;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions (k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 text("500",100,530);
 text("500",200,530);
 text("500",270,530);
 text("500",20,530);
 text("100",340,530);
 //text("100",420,530);
 text("100",500,530);
 text("200",590,530);
 text("200",660,530);
 text("200",740,530);

 if(particle!=null)
 {
   particle.display();

   if (particle.body.position.y>530)
   {

      if (particle.body.position.x < 420)
      {

        score=score+100
        particle=null;
        if (count>= 5) gameState = "end"
      }
   }
 } 

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed() {

  if (gameState!=="PLAY")
  {

    count++;
    particle=new Particle(mouseX, 10, 10, 10);
  }
}