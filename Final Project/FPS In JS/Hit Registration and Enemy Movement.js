// Tutorial: https://www.youtube.com/watch?v=0b9WPrc0H2w&feature=youtu.be 

// https://stackoverflow.com/questions/70253660/how-do-i-make-an-object-move-or-gravitate-to-a-another-object-in-p5-jswhilst-i

// A camera object to store properties for our camera
let cam = {
    x: 0, 
    y: 100,
    z: 0,
    th: 0, 
    phi: 0,
    lookAt: {
      x: 100, 
      y: 0,
      z: 0
    }
  }

  var enemiesKilled = 0
  var coolDownCheck = 'False'
  var hitBoxCheck = 'False'
  var hitBoxCheck2 = 'False'
  var redColor = 0
  var greenColor = 0
  var blueColor = 0
  var alphaColor = 255
  var redColor2 = 0
  var greenColor2 = 0
  var blueColor2 = 0
  var alphaColor2 = 255

  function preload(){
    roomModel = loadModel('3D Models/Dungeon.obj')
    ghostModel = loadModel('3D Models/Ghost.obj')
    gunModel = loadModel('3D Models/Gun.obj')
    dungeonTexture = loadImage('Textures/Dungeon UV In.png')
    ghostTexture = loadImage('Textures/Ghost UV In.png')
    gunTexture = loadImage('Textures/Gun UV In.png')
}
  
  function setup() {
    createCanvas(1940, 890, WEBGL);
    
    // Keep track of the previous mouse position for look around controls
    mousePrev = {
      x: mouseX,
      y: mouseY
    }

    var enemy1StartPosx = random(-255, 255)
    var enemy1StartPosz = random(-255, 255)
    var enemy2StartPosx = random(-255, 255)
    var enemy2StartPosz = random(-255, 255)
    var enemy1StartSpeed = random(0.5, 1.5)
    var enemy2StartSpeed = random(0.5, 1.5)

    Enemy = {
      pos: createVector(enemy1StartPosx,20,enemy1StartPosz),
      health: 3,
      speed: enemy1StartSpeed,
      damage: 5,
    }

    Enemy2 = {
        pos: createVector(enemy2StartPosx,20,enemy2StartPosz),
        health: 3,
        speed: enemy2StartSpeed,
        damage: 5,
      }
  
    Player = {
      pos: createVector(cam.x,cam.y,cam.z),
      health: 100,
    }

    pg = createGraphics(100,100)
  }


  function draw() {
    background(220);
    // orbitControl()

    pointLight(255, 255, 255, 0, 100, 0)
    
    push()
    pg.image(ghostTexture)
    pop()

    push()
    normalMaterial()
    texture(dungeonTexture)
    scale(10);
    model(roomModel);
    pop()

// CREATE 360 TURNS

    var mouseDivisor = mouseX/1.74;

    if (mouseDivisor >= 360){
      mouseDivisor -= 360
    }
    if (mouseDivisor >= 360){
      mouseDivisor -= 360
    }
    if (mouseDivisor >= 360){
      mouseDivisor -= 360
    }

//https://gist.github.com/conorbuck/2606166

// CREATE ANGLES FOR ENEMIES
const angle = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a = {
	x: cam.x,
	y: cam.z
};

const p = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a, p); // 225

// angle in degrees, from example, same data 
angleDeg = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle= angleDeg


const angle2 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a2 = {
	x: cam.x,
	y: cam.z
};

const p2 = {
	x: Enemy2.pos.x,
	y: Enemy2.pos.z
};

angle2(a2, p2); // 225

// angle in degrees, from example, same data 
angleDeg2 = Math.atan2(a2.y - p2.y, a2.x - p2.x) * 180 / Math.PI; // 45

var cameraAngle2= angleDeg2

// MAKE SURE HIT REG WORKS IN 360

if(cameraAngle < 0){
  cameraAngle += 360
}

if(cameraAngle2 < 0){
    cameraAngle2 += 360
  }

  //CREATE ANGLE CHECK VARIABLE

var angleCheck = abs(mouseDivisor + cameraAngle)
var angleCheck2 = abs(mouseDivisor + cameraAngle2)
    
    // x and y axes
    stroke(255, 0, 0)
    line(0, 0, 100, 0)
    stroke(0, 255, 0)
    line(0, 0, 0, 100)
    
    // Look around controls
    cam.th += (mouseX - mousePrev.x) / 100;
    cam.phi += (mouseY - mousePrev.y) / 100;
    
    // Movement controls
    if(keyIsPressed && keyCode == 87){
      cam.x -= 3 * cos(cam.th)
      cam.z += 3 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 83){
      cam.x += 3 * cos(cam.th)
      cam.z -= 3 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 68){
      cam.x -= 3 * cos(cam.th + PI/2)
      cam.z += 3 * sin(cam.th + PI/2)
    }
    if(keyIsPressed && keyCode == 65){
      cam.x += 3 * cos(cam.th + PI/2)
      cam.z -= 3 * sin(cam.th + PI/2)
    }

    if(keyIsPressed && keyCode == 87){
      Player.pos.x -= 3 * cos(cam.th)
      Player.pos.z += 3 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 83){
      Player.pos.x += 3 * cos(cam.th)
      Player.pos.z -= 3 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 68){
      Player.pos.x -= 3 * cos(cam.th + PI/2)
      Player.pos.z += 3 * sin(cam.th + PI/2)
    }
    if(keyIsPressed && keyCode == 65){
      Player.pos.x += 3 * cos(cam.th + PI/2)
      Player.pos.z -= 3 * sin(cam.th + PI/2)
    }
    
    // Update previous mouse position
    mousePrev.x = mouseX;
    mousePrev.y = mouseY
    
    // Define the look at vector
    let x = [400, 0, 0]
    let R = math.multiply(Rz(cam.phi), Ry(cam.th))
    x = math.multiply(x, R)
    
    // Update the look-at point
    cam.lookAt = {
      x: cam.x + x._data[0],
      y: cam.y + x._data[1],
      z: cam.z + x._data[2]
    }
    
    // Call the built in p5 function 'camera' to position and orient the camera
    camera(cam.x, cam.y, cam.z,  // position
           cam.lookAt.x, cam.lookAt.y, cam.lookAt.z,  // look-at
           0, -1, 0)  // up vector
    
  

    push()
    stroke(100, 0, 90)
    line(cam.x, cam.y, cam.z, cam.lookAt.x, cam.lookAt.y, cam.lookAt.z)
    pop()

    //CHECK ANGLE FOR HIT OR MISS

    if (angleCheck >= 353 && angleCheck <= 367) {
      hitBoxCheck = 'True'
  } else {
    hitBoxCheck = 'False'
  }

  if (angleCheck2 >= 353 && angleCheck2 <= 367) {
    hitBoxCheck2 = 'True'
} else {
  hitBoxCheck2 = 'False'
}


    //CREATE ENEMY OBJECTS

    push()
    texture(ghostTexture)
    translate(Enemy.pos.x, Enemy.pos.y, Enemy.pos.z)
    fill(redColor, greenColor, blueColor, alphaColor)
    stroke(redColor, greenColor, blueColor, alphaColor)
    rotateY(-(cameraAngle * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    push()
    texture(ghostTexture)
    translate(Enemy2.pos.x, Enemy2.pos.y, Enemy2.pos.z)
    fill(redColor2, greenColor2, blueColor2, alphaColor2)
    stroke(redColor2, greenColor2, blueColor2, alphaColor2)
    rotateY(-(cameraAngle2 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    //ALLOW ENEMY TO CHASE PLAYER WITH VECTOR

    Enemy.pos.add(p5.Vector.sub(Player.pos, Enemy.pos).limit(Enemy.speed))
    Enemy2.pos.add(p5.Vector.sub(Player.pos, Enemy2.pos).limit(Enemy2.speed))

    //SET ENEMY DAMAGE AND COLOR TO 0

    if (Enemy.health <= 0) {
        alphaColor = 0
        Enemy.damage = 0
    } 
    if (Enemy2.health <= 0) {
        alphaColor2 = 0
        Enemy2.damage = 0
    }

    //CREATE WEAPON FIRE DELAY

    if (coolDownCheck === 'True') {
        setTimeout(() => {
            (coolDownCheck = 'False');
        }, 500)
    }

    console.log(enemiesKilled)
  }


  //END DRAW 

  //CHANGE ENEMY COLOR ON HIT

  function mousePressed() {
    if (coolDownCheck === 'True') {
        //DO NOTHING
    }
    if (coolDownCheck === "False") {
        coolDownCheck = 'True'
    if (hitBoxCheck === 'True') {
      redColor = 255
      Enemy.health -= 1
    } if (hitBoxCheck2 === 'True') {
        redColor2 = 255
        Enemy2.health -= 1
    } 
}
  }

  function mouseReleased() {
    redColor = 0
    redColor2 = 0
  }


  // Rotation matrix for rotation about z-axis
  function Rz(th) {
    return(
      math.matrix([[cos(th), sin(th), 0],
                  [-sin(th), cos(th), 0],
                  [0, 0, 1]])
    )
  }
  
  // Rotation matrix for rotation about y-axis
  function Ry(th) {
    return(
      math.matrix([[cos(th), 0, -sin(th)],
                   [0, 1, 0],
                   [sin(th), 0, cos(th)]
                  ])
    )
  }
