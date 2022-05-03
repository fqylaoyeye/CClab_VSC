let head;
let shake;
let light;
function setup() {
  let canvas = createCanvas(550, 550);
  canvas.parent("sketchcontainer");
  head = new Pighead(width / 2, height / 2);
  head1 = new Pighead(1.77 * width, 2.41 * height);
}

function draw() {
  background(0);
  head.update();
  head.display();

  light= map(mouseY,0,height,90,0);
  
  //eyebrow
  if (keyCode == ENTER) {
    shake = random(-3, 3);
    push()
    translate(325,200);
    rotate(PI/10);
    bulb(0,0);
    pop()

  } else {
    shake = 0;
  }

  push();
  translate(width / 2, height / 2);
  line(-22, -15 + shake, -11, -11);
  line(22, -15 + shake, 11, -11);
  pop();

  //body
  push();
  stroke(255);
  strokeWeight(2);
  noFill();
  translate(width / 2, height / 2);
  bezier(40, 25, 45, 30, 50, 44, 54, 48);
  bezier(-30, 25, -35, 30, -40, 44, -34, 48);
  //feet
  bezier(34, 35, 25, 48, 32, 52, 46, 43);
  bezier(-30, 25, -46, 20, -48, 26, -34, 44);
  pop();

  //table
  push();
  stroke(255);
  translate(width / 2, height / 2);
  line(-70, 48, 80, 48);
  bezier(-70, 48, -40, 100, 30, 90, 80, 48);
  pop();

  //computer
  push();
  translate(width / 2, height / 2);
  triangle(-4, 70, 16, 52, -8, 52);
  line(-5, 56, 12, 56);
  line(-4, 60, 8, 60);
  line(-3, 64, 12, 52);
  line(-6, 60, 6, 52);
  colorMode(HSB);
  fill(60, 90, 95);
  quad(-60, 40, -10, 40, -4, 70, -54, 70);
  pop();

  push();
  scale(0.25);
  head1.display();
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
    // noStroke();
    ellipseMode(CENTER);
    ellipse(x, y, 100, 84);
    pop();
    push();
    noStroke();
    triangle(x - 35, y - 30, x - 5, y - 30, x - 25, y - 50);

    triangle(x + 35, y - 30, x + 5, y - 30, x + 25, y - 50);
    pop();
    //*complete stroke
    line(x - 35, y - 30, x - 25, y - 50);
    line(x + 35, y - 30, x + 25, y - 50);
    line(x - 14, y - 40, x - 25, y - 50);
    line(x + 14, y - 40, x + 25, y - 50);
    //pig nose
    push();
    ellipse(x, y + 6, 38, 20);
    fill(255);
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

  update() {
    
  }
  display() {
    this.head(this.x, this.y);
  }
}
function bulb(x,y){
  push();
  colorMode(HSB);
  fill(60, light, 90);
  // bezier(320, 200, 290, 160, 360, 160, 330, 200);
  // bezier(322, 198, 323, 197, 323, 195, 320, 190);
  // bezier(328, 198, 327, 197, 327, 195, 330, 190);
  // fill(0, 0, 100);
  // ellipse(325, 201, 14, 5);
  // ellipse(325, 204, 12, 4);
  // ellipse(325, 206, 10, 3);
  // ellipse(325, 209, 6, 4);
  bezier(x-5, y, x-35, y-40, x+35, y-40, x+5, y);
  bezier(x-3, y-2, x-2, y-3, x-2, y-5, x-5, y-10);
  bezier(x+3, y-2, x+2, y-3, x+2, y-5, x+5, y-10);
  fill(0, 0, 100);
  ellipse(x, y+1, 14, 5);
  ellipse(x, y+4, 12, 4);
  ellipse(x, y+6, 10, 3);
  ellipse(x, y+9, 6, 4);
  pop();
}