
let dancer;

function setup() {

  createCanvas(550,550);
 
  dancer = new SylviaDancer(width / 2, height / 2);
}

function draw() {
  
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

