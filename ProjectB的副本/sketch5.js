let head;

function setup() {
  let canvas = createCanvas(550, 550);
  canvas.parent("sketchcontainer");
  // pg = createGraphics(windowWidth, windowHeight);
  head = new Pighead(width / 2, height / 2);
}

function draw() {
  background(0);

  // pg.background(0);
  // pg.blendMode(ADD);

  //pillow
  push();
  noFill();
  stroke(255);
  strokeWeight(2);
  translate(width / 2, height / 2);

  bezier(-30, +60, -30, +50, -10, +10, +8, -8);
  bezier(-20, +60, -20, +50, -0, +10, +20, -6);
  bezier(+8, -8, +50, +0, +100, +10, +110, +60);
  bezier(-30, +60, +20, +70, +70, +70, +110, +60);

  ellipseMode(CENTER);
  ellipse(-62, +32, 85, 55);
  pop();
  head.update();
  head.display();
  // //light
  //   image(pg, 0, 0, pg.width, pg.height);
  //    push();
  //    pg.translate(pg.width/2-50,pg.height/2+6);
  //    pg.noStroke();
  //    pg.rotate(-45);
  //    colorMode(HSB);
  //    pg.fill(0,100,100);
  //    pg.ellipse(0,0,50,35);
  //    pop();

  //bed
  push();
  stroke(255);
  strokeWeight(2);
  translate(width / 2, height / 2);
  beginShape();
  colorMode(HSB);
  fill(60, 90, 90);
  vertex(-20, +60);
  bezierVertex(-20, +50, -0, +10, +20, -6);

  vertex(+20, -6);
  bezierVertex(+50, +0, +100, +10, +110, +60);

  vertex(+110, +60);
  bezierVertex(+70, +70, +20, +70, -20, +60);
  endShape();
  pop();

  //feet
  push();
  translate(width / 2 - 22, height / 2 + 38);
  rotate(100);
  colorMode(HSB);
  fill(0, 0, 90);
  ellipseMode(CENTER);
  ellipse(0, 0, 11, 13);
  pop();
  push();
  translate(width / 2 - 8, height / 2 + 8);
  rotate(-90);
  colorMode(HSB);
  fill(0, 0, 90);
  ellipseMode(CENTER);
  ellipse(0, 0, 11, 13);
  pop();
  //phone
  push();
  colorMode(RGB);
  fill(80);
  translate(width / 2 - 18, height / 2 + 20);
  rotate(-45);
  rectMode(CENTER);
  rect(0, 0, 23, 35, 4);
  pop();
  push();
  colorMode(HSB);
  fill(0, 0, 100);
  circle(width / 2 - 32, height / 2 + 18, 2.8);
  circle(width / 2 - 27, height / 2 + 21, 2.4);
  pop();
}

class Pighead {
  constructor(hxcenter, hycenter) {
    this.x = hxcenter;
    this.y = hycenter;
  }

  head(x, y) {
    //head

    push();
    colorMode(HSB);
    fill(0, 0, 80);
    ellipseMode(CENTER);
    ellipse(x, y, 100, 84);
    pop();

    push();
    colorMode(HSB);
    fill(0, 0, 80);
    noStroke();
    triangle(x - 35, y - 30, x - 5, y - 30, x - 25, y - 50);
    triangle(x + 35, y - 30, x + 5, y - 30, x + 25, y - 50);
    pop();

    //light effect
    let c = map(mouseY, 0, width, 80, 100);
    push();
    colorMode(HSB);
    noStroke();
    fill(0, 0, c);
    ellipse(x, y + 6, 55, 46);
    pop();

    //pig nose
    push();
    colorMode(HSB);
    fill(0, 0, c);
    ellipse(x, y + 6, 38, 20);

    // fill(255);
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

  // sinValue() {
  //   sinValue = 0;
  // }
  update() {
    // this.sinValue = map(sin(frameCount * 0.08), -1, 1, -50, 50);
    // this.x += this.sinValue / 15;
  }

  display() {
    push();
    translate(this.x - 50, this.y);
    rotate(-45);

    this.head(0, 0);
    pop();
  }
}
