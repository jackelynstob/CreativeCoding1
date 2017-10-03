//Self-Portrait
//Create Canvas
function setup() {
  createCanvas( 600, 1200 );
}

function draw() {
  //set background to white, go back and switch to black afterwards
  background( 'rgb( 0, 0, 0 )' );

  //hair behind head left side
  fill('rgb(250, 250, 0)');
  rect(195, 320, 75, 270, 200, 10, 0, 0);
  //hair behind head right side
  fill('rgb(250, 250, 0)');
  rect(330, 320, 75, 270, 10, 200, 0, 0);

  //arms
  push();
  //left arm
  strokeWeight(25);
  stroke('rgb(220, 0, 225)');
  line(270, 609, 210, 690);
  line(210, 690, 270, 720);
  //right arm
  line(327, 609, 387, 690);
  line(387, 690, 327, 720);
  pop();

  //legs
  //left leg
  fill( 'rgba( 255, 218, 185, 60)');
  rect(240, 875, 30, 95);
  //right leg
  rect(330, 875, 30, 95);

  //shoes
  //left shoe
  fill('rgb(165, 42, 42)');
  rect(240, 960, 30, 25);
  ellipse(240, 990, 70, 25);
  //right shoe
  fill('rgb(165, 42, 42)');
  rect(330, 960, 30, 25);
  ellipse(330, 990, 70, 25);


  //body
  fill( 'rgb(220, 0, 225)');
  triangle(297, 500, 200, 900, 410, 900);

  //neck
  fill( 'rgba( 255, 218, 185, 60 )' );
  rect(275, 570, 47, 20);

  //shape of head
  fill( 'rgba( 255, 218, 185, 60 )' );
  ellipse(300, 450, 200, 250);

//eyes
  push();
  translate(200, 330);
  //left eye
  fill('rgb( 250, 250, 250)');
  arc(60, 85, 40, 25, PI, TWO_PI);
  arc(60, 85, 40, 20, TWO_PI, PI);
  //iris
  fill('rgb( 0, 145, 128 )')
  ellipse(61, 84, 20, 20 );
  //pupil
  fill('rgb(0, 0, 0)');
  ellipse(61, 84, 10, 10);

  //right eye
  fill('rgb( 250, 250, 250)');
  arc(135, 85, 40, 25, PI, TWO_PI);
  arc(135, 85, 40, 20, TWO_PI, PI);
  //iris
  fill('rgb( 0, 145, 128 )');
  ellipse(136, 84, 20, 20);
  //pupil
  fill('rgb(0, 0, 0)');
  ellipse(136, 84, 10, 10);

  //bangs
  fill('rgb(250, 250, 0)');
  arc(100, 70, 200, 170, PI, TWO_PI, CHORD);

  //nose
  line(100, 115, 90, 150);
  line(90, 150, 110, 150);

  //glasses
  noFill();
  strokeWeight(2);
  //left rim
  rect( 30, 69, 60, 30, 30, 30, 30, 30);
  //right rim
  rect( 105, 69, 60, 30, 30, 30, 30, 30);
  //bridge
  line(90, 85, 105, 85);
  //left ear hook lol
  line(30, 85, 4, 88);
  //right ear hook lol
  line(165, 85, 197, 88);

  //mouth
  strokeWeight(1.5);
  fill('rgb(255, 150, 203)');
  arc(100, 190, 100, 40, TWO_PI, PI, CHORD);

  pop();

//Tizzity Title
  push();
  textAlign(CENTER);
  textSize(40);
  textFont("Arial");
  text("'JACK IN BLACK' - Jack Stob", 300, 200);
  pop();
  

}
