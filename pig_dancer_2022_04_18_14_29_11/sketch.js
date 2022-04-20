/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(550, 550);
  canvas.parent("my-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new SylviaDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.update();
  dancer.display();
}

class SylviaDancer {
  constructor(hxcenter, hycenter) {
    this.x = hxcenter;
    this.y = hycenter;
  }
  limb(lx, ly, rectlength, rectwidth, angle) {
    push();
    noStroke();
    translate(lx, ly);
    rotate(angle);
    rect(0, 0, rectlength, rectwidth, 10);
    pop();
  }
  head(x, y, theta) {
    //head
    push();
    triangle(x - 35, y - 30, x - 5, y - 30, x - 25, y - 50);

    triangle(x + 35, y - 30, x + 5, y - 30, x + 25, y - 50);
    pop();
    push();
    ellipseMode(CENTER);
    ellipse(x, y, 100, 84);
    pop();
    //pig nose
    push();
    ellipse(x, y + 6, 38, 20);
    fill(random(0, 255));
    ellipse(x - 8, y + 6, 5, 8);
    ellipse(x + 8, y + 6, 5, 8);
    pop();

    //pig eyes
    push();
    fill(0);
    circle(x - 14, y - 6, 3);
    circle(x + 14, y - 6, 3);
    pop();
  }
  dance() {
    dance = 0;
  }
  light() {
    light = 30;
  }
  sinValue() {
    sinValue = 0;
  }
  update() {
    this.dance = random(-0.7, 0.7);
    this.light = map(noise(frameCount * 0.3), 0, 1, 29.6, 30.5);
    this.sinValue = map(sin(frameCount * 0.08), -1, 1, -50, 50);
    this.x += this.sinValue / 15;
  }
  display() {
    //light

    push();
    colorMode(HSB);
    fill(random(0, 360), random(50, 100), 100);
    rectMode(CENTER);
    translate(this.x - 40, this.y + 5);
    rotate(this.light);
    rect(0, 0, 185, 10, 5);
    pop();

    push();
    colorMode(HSB);
    fill(random(0, 360), random(50, 100), 100);
    rectMode(CENTER);
    translate(this.x + 40, this.y + 5);
    rotate(-this.light);
    rect(0, 0, 185, 10, 5);
    pop();

    //pigbody

    push();
    rectMode(CENTER);
    noStroke();
    rect(this.x, this.y + 55, 85, 55, 20);
    pop();
    //limb

    push();

    this.limb(this.x - 34, this.y + 39, 26, 12, 9.7 + this.dance);
    this.limb(this.x + 30, this.y + 30, 26, 12, 50 - this.dance);
    this.limb(this.x - 28, this.y + 72, 26, 15, 90 + this.dance);
    this.limb(this.x + 36, this.y + 66, 26, 15, 45 - this.dance);

    pop();

    this.head(this.x, this.y + this.sinValue);
  }
}

// ******** //
// the next function draws a SQUARE and CROSS
// to indicate the approximate size and the center point
// of your dancer.
// it is using "this" because this function, too,
// is a part if your Dancer object.
// comment it out or delete it eventually.
//     this.drawReferenceShapes()

//     pop();
//   }
//   drawReferenceShapes(){
//     noFill();
//     stroke(255, 0, 0);
//     line(-5, 0, 5, 0);
//     line(0, -5, 0, 5);
//     stroke(255);
//     rect(-100, -100, 200, 200);
//     fill(255);
//     stroke(0);
//   }

// }

// //GOAL:
// //The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together.

// //RULES:
// //For this to work you need to follow one rule:
//   - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
//   - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
//   - Your dancer will always be initialized receiving two arguments:
//     - startX (currently the horizontal center of the canvas)
//     - startY (currently the vertical center of the canvas)
//   beside these, please don't add more parameters into the constructor function
//   - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels.
