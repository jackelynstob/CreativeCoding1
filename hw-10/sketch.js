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

    makeLittleDots(circle, height, side);




//create random numbers for the festive ball to be located
    let num1 = floor(random(0, width));
    let num2 = floor(random(0, height));


    festiveBall( num1, num2, 1.0, 1.0);
//utilize the array through text

    textSize(height/13);
    fill(random(100,255), 0, 0);
    text("I know it's Thanksgiving time... but:" + " " + string[idx], windowWidth/6, windowHeight/3);
//make the text change and go up by one element
    idx = (idx + 1) % string.length;

} //end of draw function



//create first function
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




// create some randomly green circles to look like that loop through the rows a.k.a. second function
function makeLittleDots(circle, height, side){
    for ( let y = circle; y < height; y += side) {
        for ( let x = circle/2; x < width; x += side) {
             fill( random(255), random(255), random(255));
            // alert("x= " + x + " " + "y= " + y + " side= " + side );
             ellipse( x , y, 16 - circle/10, 16 - circle/10 );
    }
  }
}
