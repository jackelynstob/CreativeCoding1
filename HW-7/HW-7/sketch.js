var col = {};
  r = 0;
  g = 0;
  b = 0;

var ball = {};
ball.width = 20;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
ball.tru = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);


}



function draw() {



    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;



    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }

    if (mouseIsPressed) {
      col.r = random( 150 );
      col.g = random( 0 );
      col.b = random( 255 );
      noStroke();
      fill(col.r, col.g, col.b, 95);
      ellipse(ball.x, ball.y, ball.width, ball.width);
    } else {
      col.r = random( 180, 255 );
      col.g = random( 50, 140 );
      col.b = ( 0 );
      fill(col.r, col.g, col.b, 95);
      noStroke();
      ellipse(ball.x, ball.y, ball.width, ball.width);
    }


}


function mousePressed() {
  ball.scale_x = map(mouseX, 0, width, 0.5, 5);
  ball.scale_y = map(mouseY, 0, height, 0.5, 15);
}
