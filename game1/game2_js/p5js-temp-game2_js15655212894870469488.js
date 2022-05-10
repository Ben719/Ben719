var ballx = 300;
var bally = 300;
var ballSize = 200;
var score = 0;
var img1, img2; 
var c; // our text color as a variable, set in setup
var gameState ="begin";


function preload() {
  
  img1 = loadImage('https://ben719.github.io/game1/ship2.png'); // 
  img2 = loadImage('https://ben719.github.io/game1/Spacebattle%202.png'); //bakcground LI  

 } 
function setup() {
  createCanvas(600, 600);
  let c =color('red'); //text color
  fill(c);
  textAlign(CENTER);
  textSize(20);
} // end of setup ===============

function draw() {
  
 if(gameState =="begin"){
  background(img2);
  beginGame();
 }
 if(gameState =="L1"){
  background(img2);
  levelOne();
}
if(gameState =="L2"){
    background(img2);
  levelTwo();
}
if(gameState =="L3"){
    background(img2);
  levelThree();
}
if(gameState =="Win"){
    background(img2);
  win();
} 
  text(("Score: " + score), width/2,40);
} // end of draw
  
 function beginGame(){
if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
} // end of beginGame

function levelOne(){
  text("level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    ballx = random(height);
    score = score + 1;
  } // end if
  if(score>= 20){
    gameState= "L2";
  }
  line(ballx, bally, mouseX, mouseY);
//  ellipse(ballx,bally, ballSize, ballSize);
  image(img1, ballx, bally, ballSize, ballSize);
} // end of level 1  ===============


function levelTwo(){
  text("level 2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    ballx = random(height);
    score = score + 1;
  } // end if
  if(score>= 40){
      gameState= "L3";
  }
    image(img1, ballx, bally, ballSize, ballSize);
} // end of level 2  ===============


function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    ballx = random(height);
    score = score + 1;
    ballSize=ballSize -1;
  } // end if
  if (score>=60) {
        gameState= "Win";
   }
        image(img, ballx, bally, ballSize, ballSize);
  }  // end level 3
  

   function win() {
     background(img2);
      let c =color('red'); //text color
      fill(c);
      textSize(72);
      textAlign(CENTER, CENTER);
    text("You Won", width/2, height/2); 
   } // end win
