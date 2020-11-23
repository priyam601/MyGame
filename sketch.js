 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var man;
 var ground,plat1,plat2; 
 var ground2;

 function preload(){
   back = loadImage("grass2.png");
   backs = loadImage("Images/grass5.jpg");
 }


function setup() {

  engine = Engine.create();
  world = engine.world;

 //Create the Bodies Here.

Engine.run(engine);

//creating a canvas
createCanvas(2800,700);



//ground
ground = new Ground(200,380,2190,10)
ground2 = new Ground(2285,380,1000,10);

// the pc 
man = new Player(200,300,20,20);

//over here plat is platform
plat1 = new Platform(400,315,35,35); 
plat2 = new Platform(460,315,35,35); 
plat3 = new Platform(800,350,35,50); 
plat4 = new Platform(1000,350,35,50); 
lava = new Platform(440,370,200,20);

// over here obs refers to obstcale 
obs1 = new Obstacle(900,350,30,30);

// ug is underground
ug1 = new Underground(1300,480,10,200); 
ug2 = new Underground(1470,580,350,10); 
ug3 = new Underground(1350,460,10,155); 
ug4 = new Underground(1470,540,250,10); 
ug5 = new Underground(1650,550,10,70); 
ug6 = new Underground(1600,465,10,160); 
ug7 = new Underground(1680,520,70,10); 
ug8 = new Underground(1720,490,10,70); 
ug9 = new Underground(1750,450,70,10); 
ug10 = new Underground(1790,420,10,70); 
 

console.log("plat1_options--->"+ plat1);
console.log(plat1);
console.log(man);


}

function draw() {

  background("green");  
  drawSprites();
  ground.display();
  ground2.display();

  lava.display();

  man.display();

  plat1.display(); 
  plat2.display();
  plat3.display();
  plat4.display();

  obs1.display();

  ug1.display();
  ug2.display();
  ug3.display();
  ug4.display();
  ug5.display();
  ug6.display();
  ug7.display();
  ug8.display();
  ug9.display();
  ug10.display();



text("Welcome Hope You Enjoy Our Game!",200,200,500,500);

console.log(man);

obs1.move();

/* image(back,326,224,160,190)
image(back,388,224,160,190)
image(backs,400,400,160,190)
 */
//reset();


}

function keyPressed() {
if(keyCode===32){
  man.jump();

}
if(keyCode===39){
  man.walk();

}

 }

// function reset(){
// man.position.x = 200
// }





 


