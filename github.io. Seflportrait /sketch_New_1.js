function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(255, 102, 102); //color red
fill(255, 229, 180); // color skin tone
  ellipse(250, 320, 300, 370);   // Head
fill(255, 255, 255); //left eye color white
  ellipse(200, 270, 60, 50);  // Left eye
fill(153, 255, 153); //left pupil eye color green
  ellipse (200, 270, 25, 25); // pupil left eye
fill(255, 255, 255); //right eye color white
  ellipse(300, 270, 60, 50);  // Right eye
fill(153, 255, 153); //right pupil eye color green
 ellipse (300, 270, 25, 25); // pupil right eye
fill(255, 178, 102); // left eye small iris color brown
 ellipse (200, 270, 5, 5); // left eye small iris 
fill(300, 178, 102); // right eye small iris color brown
 ellipse (300, 270, 5, 5); // right eye small iris

    
  
  fill(255, 255, 255); //mouth skinn tone
  arc(230, 400, 70, 70, QUARTER_PI, PI+QUARTER_PI); // mouth

fill(32, 32, 32); //left eye brow color black
  rect(140, 210, 90, 14); //left eye brow
fill(32, 32, 32); //Right eye brow color black
  rect(260, 210, 90, 14); //Right eye brow
  
  fill(255, 229, 180); // Neck color
 rect(230, 506, 35, 30); // Neck
  
  
  fill(255, 204, 153); //nose color
 arc(250, 310, 60, 80, 1, HALF_PI); // nose
  fill (32, 32, 32); // Hair color
    arc(238, 150, 200, 70, PI, TWO_PI+HALF_PI); // hair
  arc(165, 160, 90, 70, PI, TWO_PI+HALF_PI); // hair
    arc(200, 140, 90, 70, PI, TWO_PI+HALF_PI); // hair
    arc(230, 140, 90, 70, PI, TWO_PI+HALF_PI); // hair
    arc(260, 140, 90, 70, PI, TWO_PI+HALF_PI); // hair
    arc(280, 140, 90, 70, PI, TWO_PI+HALF_PI); // hair

   arc(200, 120, 200, 100, 0, HALF_PI); // Hair
   arc(270, 120, 100, 100, 0, HALF_PI); // Hair
    arc(150, 130, 100, 100, 1, HALF_PI); // hair 
    ellipse(250, 635, 150, 200); //body shape
    
 
     rotate(PI/-10);
 arc(150, 230, 180, 70, PI, TWO_PI+HALF_PI); // hair
 
       

}
