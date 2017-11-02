

function setup() {
	createCanvas(600, 600);
}

function draw() {
  // set frame rate
    frameRate(10);
  // play with let variables instead of var
    let amtInRow = 15;
  	let circle = 30;
  	let side = width / amtInRow;

  // set background to black cuz izzz night time
    background(0);

  // because it's a good ass song: under umbrellas
    textSize(16);
    textAlign(RIGHT);
    text("Under Umbrellas", mouseX, mouseY);

// create some randomly blue circles to look like rain that loop through the rows but have a sharp angle... looks cool

    for ( let y = circle; y < height; y += side) {
  		for ( let x = circle/2; x < width; x += side) {
  			fill( 0, 0, random(255) );
  			ellipse( x + y, y, 16 - circle/10.0, 16 - circle/10 );
  		}
    }

// create the clouds babe,

  for (let x = 0; x <= width; x += 50) {
    noStroke();
    fill(255, 130);
		ellipse(x, 0, 100, 100);
	}

// create the umbrella
//  stroke(5);
  fill(255, 255, 60);

// top of umbrella
  arc(175, 400, 150, 150, PI, TWO_PI, PIE);
// stick thing on umbrella

  rect(170, 400, 15, 80);
// handle for umbrella

  arc(170, 480, 30, 30, TWO_PI, PI+QUARTER_PI, PIE);

}
