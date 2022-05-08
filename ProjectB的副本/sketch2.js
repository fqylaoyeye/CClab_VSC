let head;
let bowl;
let shake;
function setup() {
  let canvas = createCanvas(550, 550);
  canvas.parent("sketchcontainer");
  head = new Pighead(width / 2, height / 2);
  bowl = new Bowl(1.6*width / 4, (2.4 * height) / 4,1.6*width / 4, 1.03*height/2);
  head1 = new Pighead1(1.525*width, 2.58*height );
  
}

function draw() {
  background(0);
  head.update();
  head.display();
  bowl.display();
  bowl.update();
  push();
  scale(0.25);
  head1.display();
  pop();
}
class Bowl {
  constructor(x1center, y1center,x2center, y2center) {
    this.m = x1center;
    this.n = y1center;
    this.p = x2center;
    this.q = y2center;
  }
  bowl(m, n) {
    //bowl
    push();
    colorMode(HSB);
    fill(60, 90, 90);
    //bottom
    ellipseMode(CENTER);
    stroke(0);
    ellipse(m, n + 45, 35, 12);
    bezier(m - 40, n, m - 55, n + 62, m + 55, n + 62, m + 40, n);
    pop();
    //top
    ellipse(m, n, 80, 16);
    //rice
    bezier(m - 40, n, m - 20, n - 60, m + 28, n - 20, m + 40, n);
    push();
    noStroke();
    ellipse(m - 34, n - 10, 8, 10);
    ellipse(m - 31, n - 14, 8, 15);
    ellipse(m + 30, n - 8, 10, 14);
    ellipse(m + 27, n - 10, 10, 14);
    ellipse(m - 15, n - 26, 20, 14);
    ellipse(m - 12, n - 26, 24, 14);
    ellipse(m - 18, n - 24, 20, 14);
    ellipse(m + 8, n - 25, 20, 10);
    ellipse(m + 12, n - 22, 17, 12);
    pop();
    ellipse(m - 30, n - 10, 3, 4);
    ellipse(m - 20, n - 20, 4, 3);
    ellipse(m - 15, n + 4, 4, 3);
    ellipse(m + 20, n - 15, 3, 4);
    ellipse(m + 10, n + 1, 3, 4);
    ellipse(m + 3, n - 5, 3, 4);
    ellipse(m + 3, n - 18, 3, 4);
    //egg
    push();
    colorMode(HSB);
    fill(38, 90, 90);
    ellipse(m - 1, n - 27, 22, 10);
    pop();
  }
 spoon(p,q){
  push()
  noStroke();
   colorMode(HSB);
   fill(60,90,90);
   ellipse(p,q-20,18,25);
   rectMode(CENTER);
   rect(p,q,6,50);
   pop();
   push();
   noFill();
   bezier(p,q-26,p-6,q-23,p-6,q+3-20,p,q+6-20);
   pop();
 }
  update(){
    if (mouseIsPressed){
      shake=random(-0.2,0.2);
      
      textFont("Dancing Script");
       fill(255);
      textSize(45);
      text("Gobble!",width/1.7,height/3);
     
    }else{
      shake=0;
    }
  }
  display() {
    push();
    translate(this.p,this.q);
    rotate(-PI/5+shake);
    this.spoon(0,0);
    pop();
    push();
    translate(this.m, this.n);
    rotate(PI / 7);
    this.bowl(0, 0);
    pop();
   
  }
}

class Pighead {
  constructor(hxcenter, hycenter) {
    this.x = hxcenter;
    this.y = hycenter;
  }

  head(x, y, theta) {
    //head
    push();
    triangle(x - 35, y - 30, x - 5, y - 30, x - 25, y - 50);

    triangle(x + 35, y - 30, x + 5, y - 30, x + 25, y - 50);
    pop();
    push();
    noStroke();
    ellipseMode(CENTER);
    ellipse(x, y, 100, 84);
    pop();
    //pig nose
    push();
    ellipse(x, y + 5, 36, 25);
    fill(255);
    ellipse(x - 8, y + 6, 5, 8);
    ellipse(x + 8, y + 6, 5, 8);
    pop();

    //pig eyes
    push();
    fill(0);
    circle(x - 12, y - 9, 2.5);
    circle(x + 12, y - 9, 2.5);
    pop();

    //pig mouth
    push();
    bezier(
      x + 3,
      y + 20 + 5*shake,
      x,
      y + 23,
      x,
      y + 25,
      x + 3,
      y + 28 + 10*shake
    );
    bezier(x - 3, y + 21, x - 2, y + 22, x - 2, y + 24, x - 3, y + 25);
    line(x, y + 24, x - 1, y + 24);
    pop();
    //details: rice on the face
    ellipse(x - 21, y + 21, 4, 3);
    ellipse(x + 16, y + 18, 3, 4);
    ellipse(x + 18, y + 28, 3, 4);
  }
  body(x, y) {
    
    beginShape();
    push();
    fill(0);
    vertex(x+35,y+30);
    bezierVertex(x+55,y+80,x+40,y+100,x-10,y+100);
    vertex(x-10,y+100);
    bezierVertex(x-20,y+96,x-20,y+94,x-16,y+93);
    vertex(x-16,y+93);
    bezierVertex(x-35,y+92,x-60,y+65,x-35,y+30);
    pop();
    endShape();
    push();
    noFill();
    stroke(0);
    bezier(x+35,y+30,x+55,y+80,x+40,y+100,x-10,y+100);
    bezier(x-10,y+100,x-20,y+96,x-20,y+94,x-10,y+90);
    bezier(x-5,y+45,x-30,y+47,x-30,y+53,x-5,y+55);
    bezier(x-16,y+93,x-35,y+92,x-60,y+65,x-35,y+30);
    bezier(x+35,y+30,x+25,y+45,x-25,y+45,x-35,y+30);
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
    this.head(this.x, this.y);
    this.body(this.x, this.y);
  }
}
class Pighead1 {
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

  // sinValue() {
  //   sinValue = 0;
  // }
  update() {
    // this.sinValue = map(sin(frameCount * 0.08), -1, 1, -50, 50);
    // this.x += this.sinValue / 15;
  }
  display() {
    push();
    translate(this.x,this.y);
    rotate(PI/7);
    this.head(0,0);
    pop();
  }
}
