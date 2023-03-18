let angle = 0;

if (angle > 0.0)


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(50);

  // we'll be drawing a square in the center
  // of our sketch that rotates around itself
  push();
  translate(width/2, height/2);

  // the angle of rotation is what we're animating
  // (ie changing over time) so first we'll increase
  // its value and then rotate to that angle
  angle += 1;
  rotate(angle);

  // try changing the amount we add to the angle
  // and see how the animation changes!
  // (hint: we can think of this as 'speed')

  // then draw the square
  fill(255);
  noStroke();
  rectMode(CENTER);
  square(0,0, 150);
  pop();

  // a slightly fancier addition, but really this
  // just builds on what we did above!
  // we use a for-loop to create a ring of
  // squares 30º degrees apart around the center
  for (let a=0; a<radians(360); a+=radians(30)) {
    push();
    translate(width/2, height/2);   // move origin to center
    rotate(a);                      // rotate each by 30º
    translate(0, 200);              // then offset vertically
    rotate(-angle);                 // spin around the other way!
    rectMode(CENTER);
    square(0,0, 50);
    pop();
  }
}