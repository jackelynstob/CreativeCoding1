//set up array
let string = ["Merry", "Christmas", "Ya", "Filthy", "Animal"];

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(3);
}


let idx = 0;

function draw() {
    background(0);

//use code from a past project (hw-8)
    let amtInRow = 15;
  	let circle = 30;
  	let side = width / amtInRow;


    // create some randomly green circles to look like that loop through the rows

        for ( let y = circle; y < height; y += side) {
    		for ( let x = circle/2; x < width; x += side) {
      			fill( 0, random(255), 0 );
      			ellipse( x , y, 16 - circle/10.0, 16 - circle/10 );
      		}
        }


//create random numbers for the festive ball to be located
    let num1 = floor(random(0, 500));
    let num2 = floor(random(0, 500));

    let pos = twoValues(num1, num2);

    festiveBall( pos, pos, 1.0, 1.0);
//utilize the array through text

    textSize(15);
    fill(random(100,255), 0, 0);
    text("I know it's Thanksgiving time... but:" + " " + string[idx], windowWidth/3, windowHeight/3);
//make the text change and go up by one element
    idx = (idx + 1) % string.length;

}

//create first function
function twoValues(value1, value2) {

  let result = value1 + value2;

  return result;
}

//create second function
function festiveBall( pos_x, pos_y, scale_x, scale_y){

  push();

  translate( pos_x, pos_y );
  scale( scale_x, scale_y );

  noStroke();
  fill(11, 102, 35);
  ellipse(0, 0, 100);
  noStroke();
  fill(255, 0, 0);
  ellipse(0, 0, 50);
  fill(0, 255, 0);
  triangle(0, -25, -20, 20, 20, 20);

  pop();


}
