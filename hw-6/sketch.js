//global variables
var col = 0;
//use a modulo
var zeroo = 9 % 3;
//create object
var eye = {};
eye.pupilColor = "black";
eye.Width = 65;
eye.topHeight = 40;
eye.bottomHeight = 35;
eye.size = 25;

var leftWall = 200;
var rightWall;
var xc;
var xm;
var ym;

function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate( 16 );
    background( col );
}

function draw() {

//establish the right wall location and use subtraction/addition
    rightWall = width - 200;


//make the background change from black to white as the mouse moves from left to right and utilize the map function
    col = map( mouseX, zeroo, width, zeroo, 255 );
    background( col );

//establish random colors for red green and blue and use floor algorithm
    red = floor( random(256) );
    green = floor( random(256) );
    blue = floor( random(256) );

//draw the walls

    line(leftWall, zeroo, leftWall, height);
    line(rightWall, zeroo, rightWall, height);



// create a constrain (algorithm number 2)

    var xc = constrain(mouseX, leftWall, rightWall);
    var xm = mouseX;
    var ym = mouseY;

//sclera

    fill( 250 );
    arc( xc, mouseY, eye.Width, eye.topHeight, PI, TWO_PI);
    arc( xc, mouseY, eye.Width, eye.bottomHeight, TWO_PI, PI);

//iris

    fill( red, green, blue );
//use multiplication
    ellipse( xm, ym, eye.size*1.25 );

//pupil

    fill( eye.pupilColor );
//use division
    ellipse( xm, ym, eye.size/1.25);
}
