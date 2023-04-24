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
  var hitBoxCheck3 = 'False'
  var hitBoxCheck4 = 'False'
  var hitBoxCheck5 = 'False'
  var hitBoxCheck6 = 'False'
  var hitBoxCheck7 = 'False'
  var hitBoxCheck8 = 'False'
  var hitBoxCheck9 = 'False'
  var hitBoxCheck10 = 'False'
  var redColor = 0
  var greenColor = 0
  var blueColor = 0
  var alphaColor = 255
  var redColor2 = 0
  var greenColor2 = 0
  var blueColor2 = 0
  var alphaColor2 = 255
  var redColor3 = 0
  var greenColor3 = 0
  var blueColor3 = 0
  var alphaColor3 = 255
  var redColor4 = 0
  var greenColor4 = 0
  var blueColor4 = 0
  var alphaColor4 = 255
  var redColor5 = 0
  var greenColor5 = 0
  var blueColor5 = 0
  var alphaColor5 = 255
  var redColor6 = 0
  var greenColor6 = 0
  var blueColor6 = 0
  var alphaColor6 = 255
  var redColor7 = 0
  var greenColor7 = 0
  var blueColor7 = 0
  var alphaColor7 = 255
  var redColor8 = 0
  var greenColor8 = 0
  var blueColor8 = 0
  var alphaColor8 = 255
  var redColor9 = 0
  var greenColor9 = 0
  var blueColor9 = 0
  var alphaColor9 = 255
  var redColor10 = 0
  var greenColor10 = 0
  var blueColor10 = 0
  var alphaColor10 = 255

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
    var enemy3StartPosx = random(-255, 255)
    var enemy3StartPosz = random(-255, 255)
    var enemy3StartSpeed = random(0.5, 1.5)
    var enemy4StartPosx = random(-255, 255)
    var enemy4StartPosz = random(-255, 255)
    var enemy4StartSpeed = random(0.5, 1.5)
    var enemy5StartPosx = random(-255, 255)
    var enemy5StartPosz = random(-255, 255)
    var enemy5StartSpeed = random(0.5, 1.5)
    var enemy6StartPosx = random(-255, 255)
    var enemy6StartPosz = random(-255, 255)
    var enemy6StartSpeed = random(0.5, 1.5)
    var enemy7StartPosx = random(-255, 255)
    var enemy7StartPosz = random(-255, 255)
    var enemy7StartSpeed = random(0.5, 1.5)
    var enemy8StartPosx = random(-255, 255)
    var enemy8StartPosz = random(-255, 255)
    var enemy8StartSpeed = random(0.5, 1.5)
    var enemy9StartPosx = random(-255, 255)
    var enemy9StartPosz = random(-255, 255)
    var enemy9StartSpeed = random(0.5, 1.5)
    var enemy10StartPosx = random(-255, 255)
    var enemy10StartPosz = random(-255, 255)
    var enemy10StartSpeed = random(0.5, 1.5)


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

      Enemy3 = {
        pos: createVector(enemy3StartPosx,20,enemy3StartPosz),
        health: 3,
        speed: enemy3StartSpeed,
        damage: 5,
      }

      Enemy4 = {
        pos: createVector(enemy4StartPosx,20,enemy4StartPosz),
        health: 3,
        speed: enemy4StartSpeed,
        damage: 5,
      }

      Enemy5 = {
        pos: createVector(enemy5StartPosx,20,enemy5StartPosz),
        health: 3,
        speed: enemy5StartSpeed,
        damage: 5,
      }

      Enemy6 = {
        pos: createVector(enemy6StartPosx,20,enemy6StartPosz),
        health: 3,
        speed: enemy6StartSpeed,
        damage: 5,
      }

      Enemy7 = {
        pos: createVector(enemy7StartPosx,20,enemy7StartPosz),
        health: 3,
        speed: enemy7StartSpeed,
        damage: 5,
      }

      Enemy8 = {
        pos: createVector(enemy8StartPosx,20,enemy8StartPosz),
        health: 3,
        speed: enemy8StartSpeed,
        damage: 5,
      }

      Enemy9 = {
        pos: createVector(enemy9StartPosx,20,enemy9StartPosz),
        health: 3,
        speed: enemy9StartSpeed,
        damage: 5,
      }

      Enemy10 = {
        pos: createVector(enemy10StartPosx,20,enemy10StartPosz),
        health: 3,
        speed: enemy10StartSpeed,
        damage: 5,
      }
  
    Player = {
      pos: createVector(cam.x,cam.y,cam.z),
      health: 100,
    }
  }


  function draw() {
    background(220);
    // orbitControl()
    
  
    push()
    normalMaterial()
    //texture(dungeonTexture)
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

const angle3 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a3 = {
	x: cam.x,
	y: cam.z
};

const p3 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a3, p3); // 225

// angle in degrees, from example, same data 
angleDeg3 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle3= angleDeg3

const angle4 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a4 = {
	x: cam.x,
	y: cam.z
};

const p4 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a4, p4); // 225

// angle in degrees, from example, same data 
angleDeg4 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle4= angleDeg4

const angle5 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a5 = {
	x: cam.x,
	y: cam.z
};

const p5 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a5, p5); // 225

// angle in degrees, from example, same data 
angleDeg5 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle5= angleDeg5

const angle6 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a6 = {
	x: cam.x,
	y: cam.z
};

const p6 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a6, p6); // 225

// angle in degrees, from example, same data 
angleDeg6 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle6= angleDeg6

const angle7 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a7 = {
	x: cam.x,
	y: cam.z
};

const p7 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a7, p7); // 225

// angle in degrees, from example, same data 
angleDeg7 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle7= angleDeg7

const angle8 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a8 = {
	x: cam.x,
	y: cam.z
};

const p8 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a8, p8); // 225

// angle in degrees, from example, same data 
angleDeg8 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle8= angleDeg8

const angle9 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a9 = {
	x: cam.x,
	y: cam.z
};

const p9 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a9, p9); // 225

// angle in degrees, from example, same data 
angleDeg9 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle9= angleDeg9

const angle10 = (anchor, point) => Math.atan2(anchor.y - point.y, anchor.x - point.x) * 180 / Math.PI + 180;

const a10 = {
	x: cam.x,
	y: cam.z
};

const p10 = {
	x: Enemy.pos.x,
	y: Enemy.pos.z
};

angle(a10, p10); // 225

// angle in degrees, from example, same data 
angleDeg10 = Math.atan2(a.y - p.y, a.x - p.x) * 180 / Math.PI; // 45

var cameraAngle10 = angleDeg10

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
var angleCheck3 = abs(mouseDivisor + cameraAngle3)
var angleCheck4 = abs(mouseDivisor + cameraAngle4)
var angleCheck5 = abs(mouseDivisor + cameraAngle5)
var angleCheck6 = abs(mouseDivisor + cameraAngle6)
var angleCheck7 = abs(mouseDivisor + cameraAngle7)
var angleCheck8 = abs(mouseDivisor + cameraAngle8)
var angleCheck9 = abs(mouseDivisor + cameraAngle9)
var angleCheck10 = abs(mouseDivisor + cameraAngle10)
    
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

if (angleCheck3 >= 353 && angleCheck3 <= 367) {
    hitBoxCheck3 = 'True'
} else {
  hitBoxCheck3 = 'False'
}

if (angleCheck4 >= 353 && angleCheck4 <= 367) {
    hitBoxCheck4 = 'True'
} else {
  hitBoxCheck4 = 'False'
}

if (angleCheck5 >= 353 && angleCheck5 <= 367) {
    hitBoxCheck5 = 'True'
} else {
  hitBoxChec5k = 'False'
}

if (angleCheck6 >= 353 && angleCheck6 <= 367) {
    hitBoxCheck6 = 'True'
} else {
  hitBoxCheck6 = 'False'
}

if (angleCheck7 >= 353 && angleCheck7 <= 367) {
    hitBoxCheck7 = 'True'
} else {
  hitBoxCheck7 = 'False'
}

if (angleCheck8 >= 353 && angleCheck8 <= 367) {
    hitBoxCheck8 = 'True'
} else {
  hitBoxCheck8 = 'False'
}

if (angleCheck9 >= 353 && angleCheck9 <= 367) {
    hitBoxCheck9 = 'True'
} else {
  hitBoxCheck9 = 'False'
}

if (angleCheck10 >= 353 && angleCheck10 <= 367) {
    hitBoxCheck10 = 'True'
} else {
  hitBoxCheck10 = 'False'
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

    push()
    texture(ghostTexture)
    translate(Enemy3.pos.x, Enemy3.pos.y, Enemy3.pos.z)
    fill(redColor3, greenColor3, blueColor3, alphaColor3)
    stroke(redColor3, greenColor3, blueColor3, alphaColor3)
    rotateY(-(cameraAngle3 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    push()
    texture(ghostTexture)
    translate(Enemy4.pos.x, Enemy4.pos.y, Enemy4.pos.z)
    fill(redColor4, greenColor4, blueColor4, alphaColor4)
    stroke(redColor4, greenColor4, blueColor4, alphaColor4)
    rotateY(-(cameraAngle4 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    push()
    texture(ghostTexture)
    translate(Enemy5.pos.x, Enemy5.pos.y, Enemy5.pos.z)
    fill(redColor5, greenColor5, blueColor5, alphaColor5)
    stroke(redColor5, greenColor5, blueColor5, alphaColor5)
    rotateY(-(cameraAngle5 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    push()
    texture(ghostTexture)
    translate(Enemy6.pos.x, Enemy6.pos.y, Enemy6.pos.z)
    fill(redColor6, greenColor6, blueColor6, alphaColor6)
    stroke(redColor6, greenColor6, blueColor6, alphaColor6)
    rotateY(-(cameraAngle6 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    push()
    texture(ghostTexture)
    translate(Enemy7.pos.x, Enemy7.pos.y, Enemy7.pos.z)
    fill(redColor7, greenColor7, blueColor7, alphaColor7)
    stroke(redColor7, greenColor7, blueColor7, alphaColor7)
    rotateY(-(cameraAngle7 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    push()
    texture(ghostTexture)
    translate(Enemy8.pos.x, Enemy8.pos.y, Enemy8.pos.z)
    fill(redColor8, greenColor8, blueColor8, alphaColor8)
    stroke(redColor8, greenColor8, blueColor8, alphaColor8)
    rotateY(-(cameraAngle8 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

    push()
    texture(ghostTexture)
    translate(Enemy9.pos.x, Enemy9.pos.y, Enemy9.pos.z)
    fill(redColor9, greenColor9, blueColor9, alphaColor9)
    stroke(redColor9, greenColor9, blueColor9, alphaColor9)
    rotateY(-(cameraAngle9 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()

     push()
    texture(ghostTexture)
    translate(Enemy10.pos.x, Enemy10.pos.y, Enemy10.pos.z)
    fill(redColor10, greenColor10, blueColor10, alphaColor10)
    stroke(redColor10, greenColor10, blueColor10, alphaColor10)
    rotateY(-(cameraAngle10 * (PI/180)))
    scale(8)
    model(ghostModel)
    pop()
    

    //ALLOW ENEMY TO CHASE PLAYER WITH VECTOR

    Enemy.pos.add(p5.Vector.sub(Player.pos, Enemy.pos).limit(Enemy.speed))

    //SET ENEMY DAMAGE AND COLOR TO 0

    if (Enemy.health <= 0) {
        alphaColor = 0
        Enemy.damage = 0
    } 
    if (Enemy2.health <= 0) {
        alphaColor2 = 0
        Enemy2.damage = 0
    }
    if (Enemy3.health <= 0) {
        alphaColor3 = 0
        Enemy3.damage = 0
    } 
    if (Enemy4.health <= 0) {
        alphaColor4 = 0
        Enemy4.damage = 0
    } 
    if (Enemy5.health <= 0) {
        alphaColor5 = 0
        Enemy5.damage = 0
    } 
    if (Enemy6.health <= 0) {
        alphaColor6 = 0
        Enemy6.damage = 0
    } 
    if (Enemy7.health <= 0) {
        alphaColor7 = 0
        Enemy7.damage = 0
    } 
    if (Enemy8.health <= 0) {
        alphaColor8 = 0
        Enemy8.damage = 0
    } 
    if (Enemy9.health <= 0) {
        alphaColor9 = 0
        Enemy9.damage = 0
    } 
    if (Enemy10.health <= 0) {
        alphaColor10 = 0
        Enemy10.damage = 0
    } 

    //CREATE WEAPON FIRE DELAY

    if (coolDownCheck === 'True') {
        setTimeout(() => {
            (coolDownCheck = 'False');
        }, 500)
    }

    console.log(cam.x)
  }


  //END DRAW 

  //CHANGE ENEMY COLOR ON HIT

  function mousePressed() {
    if (hitBoxCheck === 'True') {
      redColor = 255
      Enemy.health -= 1
    } if (hitBoxCheck2 === 'True') {
        redColor2 = 255
        Enemy2.health -= 1
    } 
    if (hitBoxCheck3 === 'True') {
        redColor3 = 255
        Enemy3.health -= 1
      }
      if (hitBoxCheck4 === 'True') {
        redColor4 = 255
        Enemy4.health -= 1
      }
      if (hitBoxCheck5 === 'True') {
        redColor5 = 255
        Enemy5.health -= 1
      }
      if (hitBoxCheck6 === 'True') {
        redColor6 = 255
        Enemy6.health -= 1
      }
      if (hitBoxCheck7 === 'True') {
        redColor7 = 255
        Enemy7.health -= 1
      }
      if (hitBoxCheck8 === 'True') {
        redColor8 = 255
        Enemy8.health -= 1
      }
      if (hitBoxCheck9 === 'True') {
        redColor9 = 255
        Enemy9.health -= 1
      }
      if (hitBoxCheck10 === 'True') {
        redColor10 = 255
        Enemy10.health -= 1
      }
    
}

  function mouseReleased() {
    redColor = 0
    redColor2 = 0
    redColor3 = 0
    redColor4 = 0
    redColor5 = 0
    redColor6 = 0
    redColor7 = 0
    redColor8 = 0
    redColor9 = 0
    redColor10 = 0
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
