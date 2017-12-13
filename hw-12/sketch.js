// assign global variable
let balls = [];
let numOfBalls = 200;
var value = 255;



function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(9);

    // create a new ball
    let begX = 70;
    let begY = 70;
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball(begX, begY));
        // different beginning location
        begX += 100;
        if (begX > width) {
            begX = 70;
            begY += 100;
        }
    }
}

function draw() {
    background(value);
//insert instruction to click mouse
    textSize(15);
    text("click your mouse for a darker christmas vibe", 100, 100);

//recycled code cause I think the festiveBall is cute
   push();
   let num1 = floor(random(0, width));
   let num2 = floor(random(0, height));


    festiveBall( num1, num2, 1.0, 1.0);
    pop();

    for (let i = 0; i < balls.length; i++) {
        // call the ball's methods
        balls[i].ballCheck(balls, i);
        balls[i].move();
        balls[i].display();

      }
    }

//fizzity festive
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
//change background with mouse clicked
  function mouseClicked() {
      if (value == 255) {
        value = 0;
      } else {
        value = 255;
      }
    }

// Create a Class "Ball"
class Ball {
    constructor(x, y, size) {
        this.color = ('red');
        this.size = random(10, 50);
        this.rad = this.size / 2;
        this.posX = x;
        this.posY = y;
        this.deltaX = random(-10, 10);
        this.deltaY = random(-10, 10);
    }

   //create ball look
    display() {
        push();
        noStroke()
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }
    //movement of ball
    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }


    ballCheck(otherBall, theDiam) {

        //check for touching balls (lol) with n != theId
        for (let n = 0; n < otherBall.length; n++) {
            if (n != theDiam) {
                let d = dist(this.posX, this.posY, otherBall[n].posX, otherBall[n].posY);
                let totalRadius = this.rad + otherBall[n].rad;

                if (d <= totalRadius) {
                    this.deltaX *= -1;
                    this.deltaY *= -1;

                    // change from red to green when balls touch cause i heart xmas
                    if( this.color == ('red')) {
                        this.color = ('green');
                    } else {
                        this.color = ('red');
                    }
                }
            }
        }
    }

    mouseCheck() {
        // disance between circle and mouse
        let d = dist(this.x, this.y, mouseX, mouseY);
        // what is the distance in reference to the radius of the bubble
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
      }
    }
