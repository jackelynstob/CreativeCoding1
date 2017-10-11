// create your own variable for the top point of the triangle

var topPointTriX = 50;

function setup() {
    createCanvas( windowWidth, windowHeight );

    // set the frame rate for the sketch
    frameRate( 10 );
}

// set the background to black
var blue_val = 0;

//create a variable for the angle for the triangle
var angle = 0;

function draw () {

  // set the background every frame
  background( 0, 0, blue_val );
  // update black_val, by adding 1
  blue_val = blue_val + 1;
  // limit black_val to 255 using modulo
  blue_val = blue_val % 255;

  // get and display the current fram count
  fill( 255 );

  push();

  translate( width*0.5, height*0.5 );
  rotate( radians(angle) );
  //color the triangle sun yellow
    fill( 'rgb( 253, 184, 19 )' );
    triangle( topPointTriX, 2, 5, 70 , 105, 70 );

    //update angle position
    angle = angle + 30;

    pop();


    //draw a circle that moves with the mouse and is sky blue
    fill( 'rgb( 135, 206, 250 )' );
    ellipse( mouseX, mouseY, 15 );

}
  //create a function where when the mouse is clicked the background turns blue
function mousePressed() {
    background ( 0 );
}
