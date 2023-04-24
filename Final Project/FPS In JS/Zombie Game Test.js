let round;
let zombie, player;
let x, y;
let health, speed, damage, playerhealth;
function setup() {
  createCanvas(400, 400);
  round = 1;
  zombie = {
    pos: createVector(500, 200),
    //increase by 100 each round until round 9
    health: 150,
    speed: 1,
    damage: 20,
  };
  player = {
    pos: createVector(200, 200),

    //default
    health: 100,
  };
}

function draw() {
  background(220);
  //player
  fill("green");
  ellipse(player.pos.x, player.pos.y, 20, 20);
  //HUD or something
  fill("black");
  text("" + player.health, 10, 10);
  //zombie(s)
  fill("gray");
  rect(zombie.pos.x, zombie.pos.y, 20, 20);
  if (p5.Vector.sub(player.pos, zombie.pos).mag() <= 30) {
    background(0);
    textSize(20);
    text("You died \n Round " + round, 165, 200);
  }
  if (keyIsPressed && keyCode === UP_ARROW) {
    player.pos.y -= 2;
  }
  if (keyIsPressed && keyCode === DOWN_ARROW) {
    player.pos.y += 2;
  }
  if (keyIsPressed && keyCode === LEFT_ARROW) {
    player.pos.x -= 2;
  }
  if (keyIsPressed && keyCode === RIGHT_ARROW) {
    player.pos.x += 2;
  }
  zombie.pos.add(p5.Vector.sub(player.pos, zombie.pos).limit(zombie.speed))
}