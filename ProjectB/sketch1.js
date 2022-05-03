let head;

function setup() {
  let canvas = createCanvas(550, 550);
  canvas.parent("sketchcontainer");
  head = new Pighead(width / 2, height / 2);
  head1 = new Pighead(2.006 * width, 2.15 * height);
}

function draw() {
  background(0);
  head.display();
  
  if(mouseIsPressed){
   
    push();
    translate(mouseX,mouseY);
    rotate(PI/6);
    rect(0,0,90,4,3);
    pop();
    //change eye
  
    push()
    strokeWeight(2)
    line(width/2-14,height/2-6,width/2-25,height/2-1);
    line(width/2-14,height/2-6,width/2-25,height/2-11);
    line(width/2+14,height/2-6,width/2+25,height/2-1);
    line(width/2+14,height/2-6,width/2+25,height/2-11);
    pop()
      head.update();
  }else{

  //mask
  push();
  translate(width / 2, height / 2);
  rectMode(CENTER);
  rect(0, 18, 50, 28, 3);
  line(-25, 6, -48, -2);
  line(-23, 4, -48, -4);

  line(25, 6, 48, -2);
  line(23, 4, 48, -4);

  line(-25, 28, -40, 34);
  line(-25, 30, -36, 36);

  line(25, 28, 40, 34);
  line(25, 30, 36, 36);
  pop();

  push();
  scale(0.25);
  head1.display();
  pop();
}
 
}
class Pighead {
  constructor(hxcenter, hycenter) {
    this.x = hxcenter;
    this.y = hycenter;
    this.l= 0;
  }

  head(x, y,l) {
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
    fill(255-l);
    ellipse(x - 8, y + 6, 5, 8);
    ellipse(x + 8, y + 6, 5, 8);
    pop();

    //pig eyes
    push();
    fill(0);
    circle(x - 14, y - 6, 2);
    circle(x + 14, y - 6, 2);
    pop();
  }

  update() {
    this.l=random(0,255);
  }
  display() {
    this.head(this.x, this.y,this.l);
  }
}
