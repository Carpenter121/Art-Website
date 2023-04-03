var x = 0;
var y = 0;
var z = 0;
var a = 0;
var b = 0;

function setup(){
    createCanvas(1910, 940, WEBGL);
    debugMode();
    testCamera = createCamera();
    angleMode(DEGREES);
}

function preload(){
    roomModel = loadModel('Assests/Demo Room.obj')
}

function keyPressed() {
    if (keyCode === 80) {
        requestPointerLock();
    }
}

function draw(){
    background(0);
    testCamera.pan(-movedX * 0.05);
    testCamera.tilt(movedY * 0.05);
    testCamera.setPosition(y, -300, z);
    normalMaterial();
    scale(10);
    rotate(180);
    model(roomModel);
    if (keyIsDown(90)) {
        x = x - 20;
    }
    if (keyIsDown(88)){
        x = x + 20;
    }
    if (keyIsDown(65)){
        y = y - 20;
    }
    if (keyIsDown(68)){
        y = y + 20;
    } 
    if (keyIsDown(87)){
        z = z - 20;
    } 
    if (keyIsDown(83)){
        z = z + 20;
    } 
    if (y >= 1260) {
        y = 1260;
    }
    if (y <= -1260) {
        y = -1260;
    }
    if (z >= 1220) {
        z = 1220;
    }
    if (z <= -1220) {
        z = -1220;
    }

    console.log(z);
}

    