// Tutorial: https://www.youtube.com/watch?v=0b9WPrc0H2w&feature=youtu.be 

// https://stackoverflow.com/questions/70253660/how-do-i-make-an-object-move-or-gravitate-to-a-another-object-in-p5-jswhilst-i

// A camera object to store properties for our camera
let cam = {
    x: 0, 
    y: 0, 
    z: 0,
    th: 0, 
    phi: 0,
    lookAt: {
      x: 100, 
      y: 0,
      z: 0
    }
  }



  var hitBoxCheck = 'False'
  var redColor = 0
  var greenColor = 0
  var blueColor = 0
  
  function setup() {
    createCanvas(1940, 890, WEBGL);
    
    // Keep track of the previous mouse position for look around controls
    mousePrev = {
      x: mouseX,
      y: mouseY
    }

    Enemy = {
      pos: createVector(5,5,5),
      health: 3,
      speed: 0.2,
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
    
    // A big sphere for a visual reference frame
    push()
      noFill()
      stroke(0)
      box(100)
    pop()

    push()
    translate(cam.x, cam.y, cam.z)
      box(5, 5, 5)
    pop()



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

if(cameraAngle < 0){
  cameraAngle += 360
}

var angleCheck = abs(mouseDivisor + cameraAngle)
    
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
      cam.x -= 2 * cos(cam.th)
      cam.z += 2 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 83){
      cam.x += 2 * cos(cam.th)
      cam.z -= 2 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 68){
      cam.x -= 2 * cos(cam.th + PI/2)
      cam.z += 2 * sin(cam.th + PI/2)
    }
    if(keyIsPressed && keyCode == 65){
      cam.x += 2 * cos(cam.th + PI/2)
      cam.z -= 2 * sin(cam.th + PI/2)
    }

    if(keyIsPressed && keyCode == 87){
      Player.pos.x -= 2 * cos(cam.th)
      Player.pos.z += 2 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 83){
      Player.pos.x += 2 * cos(cam.th)
      Player.pos.z -= 2 * sin(cam.th)
    }
    if(keyIsPressed && keyCode == 68){
      Player.pos.x -= 2 * cos(cam.th + PI/2)
      Player.pos.z += 2 * sin(cam.th + PI/2)
    }
    if(keyIsPressed && keyCode == 65){
      Player.pos.x += 2 * cos(cam.th + PI/2)
      Player.pos.z -= 2 * sin(cam.th + PI/2)
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
    
    // Draw a sphere at the look at point
    push()
      // rotateY(cam.th)
      // rotateZ(cam.phi)
      // translate(100, 0)
      translate(cam.lookAt.x, cam.lookAt.y, cam.lookAt.z)
      fill(255)
      noStroke()
      box(10)
    pop()

    push()
    stroke(100, 0, 90)
    line(cam.x, cam.y, cam.z, cam.lookAt.x, cam.lookAt.y, cam.lookAt.z)
    pop()

    if (angleCheck >= 353 && angleCheck <= 367) {
      hitBoxCheck = 'True'
  } else {
    hitBoxCheck = 'False'
  }

    
    push()
    translate(Enemy.pos.x, Enemy.pos.y, Enemy.pos.z)
    fill(redColor, greenColor, blueColor)
    stroke(0, 0, 0)
    rotateY(-(cameraAngle * (PI/180)))
    box(1, 20, 20)
    pop()

    Enemy.pos.add(p5.Vector.sub(Player.pos, Enemy.pos).limit(Enemy.speed))

    console.log(Player.pos.x)
  }


  //END DRAW 


  function mousePressed() {
    if (hitBoxCheck === 'True') {
      redColor = 255
    }
  }

  function mouseReleased() {
    redColor = 0
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
