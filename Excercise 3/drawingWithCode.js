let x = 1;
let y = 1;
let z = 0.0005;
let a = 1;
let b = 1;
let c = 0.0010;
let e = 1;
let f= 1;
let g = 0.0015;

function setup() {
    createCanvas(1890,950);
}

function draw() {
    background(255);
    fill(0);

    if (x > 1.2 || x < 1) {
        y = y * -1;
    }

    x = x + (z * y);

    if (a > 1.2 || a < 1) {
        b = b * -1;
    }

    a = a + (c * b);

    if (e > 1.2 || e < 1) {
        f = f * -1;
    }

    e = e + (g * f);

 //outer ring section 2.3
    push();
    arc(944, 491, 777, 777, PI + QUARTER_PI, PI + PI,); 
    pop();

//outer ring section 2.2
    push();
    arc(944, 491, 777, 777, PI - QUARTER_PI, PI + QUARTER_PI,); 
    pop();

//outer ring section 2.1
    push();
    arc(944, 491, 777, 777, 0, PI - QUARTER_PI,); 
    pop();

//inner ring section 2.1 cover
    push();
    fill(255);
    quad(1251, 790, 1357, 605, 1299, 556, 1174, 763);
    pop();

//inner ring section 2.2 cover
    push();
    fill(255);
    quad(531, 606, 639, 791, 712, 766, 603, 547);
    pop();

//inner ring section 2.3 cover
    push();
    fill(255);
    quad(1051, 75, 836, 75, 823, 143, 1064, 143);
    pop();

//inner ring section 2
    push();
    stroke(255);
    fill(255);
    ellipse(944, 491, 737); 
    pop();

//outer ring section 1.3
    push();
    arc(944, 491, 512, 512, PI + QUARTER_PI, PI + PI,); 
    pop();

//outer ring section 1.2
    push();
    arc(944, 491, 512, 512, PI - QUARTER_PI, PI + QUARTER_PI,); 
    pop();

//outer ring section 1.1
    push();
    arc(944, 491, 512, 512, 0, PI - QUARTER_PI,); 
    pop();

//inner ring section
    push();
    fill(255);
    ellipse(944, 491, 421); 
    pop();

// first arrow

    push();
    triangle(891, 372, 920, 426, 945, 373);
    pop();

    push();
    scale(e);
    triangle(920, 426, 971, 426, 945, 473);
    pop();

    push();
    scale(x);
    triangle(997, 372, 971, 426, 945, 373);
    pop();

    push();
    scale(x);
    triangle(920, 426, 945, 373, 971, 426);
    pop();
// second arrow

    push();
    scale(a);
    triangle(817, 505, 845, 550, 873, 502);
    pop();

    push();
    scale(e);
    triangle(869, 592, 845, 550, 899, 545);
    pop();

    push();
    triangle(873, 502, 899, 545, 930, 499);
    pop();

    push();
    scale(a);
    triangle(845, 550, 873, 502, 899, 545);
    pop();

//third arrow
    push();
    scale(x);
    triangle(990, 549, 1018, 501, 1045, 547);
    pop();

    push();
    scale(e);
    triangle(1071, 503, 1018, 501, 1045, 547);
    pop();

    push();
    scale(a);
    triangle(990, 549, 1021, 594, 1045, 547);
    pop();

    push();
    triangle(960, 499, 1018, 501, 990, 549);
    pop();
 //first arrow length
    push();
    scale(x - 0.05);
    quad(929, 191, 959, 191, 959, 235, 929, 235); 
    pop();

    push();
    quad(929, 274, 959, 274, 959, 375, 929, 375);
    pop();
 //second arrow length
    push();
    scale(x);
    quad(680, 627, 694, 653, 734, 629, 718, 603); 
    pop();

    push();
    scale(e);
    quad(763, 611, 747, 583, 840, 530, 853, 561);
    pop();

//thrid arrow length
    push();
    scale(a);
    quad(1195, 651, 1211, 626, 1171, 603, 1157, 630); 
    pop();

    push();
    quad(1125, 613, 1143, 585, 1042, 530, 1031, 557);
    pop();

//first arrow border
    push();
    scale(x - 0.05);
    quad(816, 56, 836, 75, 823, 141, 797, 144);
    pop();

    push();
    quad(1050, 74, 1075, 56, 1092, 132, 1066, 141);
    pop();

    push();
    scale(e);
    quad(816, 56, 1075, 56, 1050, 74, 836, 75);
    pop();

//second arrow border
    push();
    quad(632, 817, 639, 791, 703, 770, 719, 787);
    pop();

    push();
    scale(x - 0.05);
    quad(502, 598, 531, 606, 583, 562, 575, 533);
    pop();

    push();
    quad(632, 817, 502, 598, 531, 606, 639, 791);
    pop();

//second arrow border
    push();
    scale(a);
    quad(1383, 597, 1357, 605, 1305, 562, 1314, 538);
    pop();

    push();
    scale(x);
    quad(1259, 819, 1251, 790, 1190, 768, 1170, 788);
    pop();

    push();
    quad(1383, 597, 1259, 819, 1251, 790, 1357, 605);
    pop();







}