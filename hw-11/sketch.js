// global variables
let lane = [] ;
let color = 'red';
let numLanes = 10 ;
let y = 50 ;
let w = 150 ;
let h = 10 ;
let down = [] ;

// setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  //add the bars across the x axis
  for (let i = 0; i < numLanes; i++) {
      let x = 10 + 200 * i;
      lane[i] = new Lanes(x, y, w, h, color);
}
}



function draw() {
  background(0, 200, 0);
  for (let i = 0; i < lane.length; i++){
//incorporate the functions
  lane[i].show();
  lane[i].move();
  lane[i].edgeCheck();

}
}



class Lanes {
  constructor( x, y, w, h, color) {
  this.x = x ;
  this.y = y ;
  this.w = w ;
  this.h = h ;
  this.color = color ;
  //direction
  this.deltaY = random(1, 20);

}

show() {
  noStroke();
  fill(this.color);
  //create rectangle
  rect(this.x, this.y, this.w, this.h);
}

move() {
  //create a directional element
 this.y += this.deltaY;
}

edgeCheck() {
  //make sure if the bars reach any of the edges, the direction and color will change.
  if (this.y >= height || this.y <= 0) {
    this.deltaY *= -1;
    this.color = random(0, 255, 0);  
  }

}

}
