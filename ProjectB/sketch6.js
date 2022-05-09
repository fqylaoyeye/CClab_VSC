let a = 0;
let xs = [];
let ys = [];
let vxs = [];
let vys = [];
let v = 1;
let vspeed = 0.01;

let n = 7;
let r = 300;
let pigx;
let pigy;
let jump;
function setup() {
  let canvas = createCanvas(550, 550);
  canvas.parent("sketchcontainer");
  pigx = width / 2;
  pigy = height / 2;
  for (let i = 0; i < n; i++) {
    xs[i] = 550 + r * sin((i * PI) / 3);
    ys[i] = 550 + r * cos((i * PI) / 3);
    vxs[i] = random(-1, 1);
    vys[i] = random(-1, 1);
  }
}

function draw() {
  background(0);

  fill(255);
  if (mouseIsPressed) {
    jump = random(0, 0.8);
  } else {
    jump = 0;
  }
  bigpig(pigx, pigy);
  if (mouseIsPressed && keyIsPressed && 200 < pigy < 550) {
    pigy -= 1;
    pigx += random(-2, 2);
  }

  if (pigy < 40) {
    textFont("Handlee");
    textSize(48);
    text("The End ~", 100, 150);
    textSize(36);
    text("Flying Pig", 255, 240);
  }

  scale(0.5);
  for (let i = 0; i < n; i++) {
    let xn = xs[i] + random(0, 4);
    let yn = ys[i] + random(0, 4);
    pig(xn, yn);

    if (mouseIsPressed) {
      push();
      translate(width / 2, height / 2);

      // pig(width / 2, height / 2);

      pop();

      for (let i = 0; i < n; i++) {
        xs[i] += vxs[i];
        ys[i] += vys[i];
      }
    }
    if (xs[i] - 550 > width || xs[i] < 0) {
      vxs[i] = -vxs[i];
      vspeed += 1;
      v = v + vspeed;
    } else {
      v += 0.1;
    }

    if (ys[i] - 550 > height || ys[i] < 0) {
      vys[i] = -vys[i];
      vxs[i] = -vxs[i];
      vspeed += 0.01;
      v = v + vspeed;
    } else {
      v += 0.01;
    }
  }
}
function pig(x, y) {
  push();
  triangle(x - 35, y - 30, x - 5, y - 30, x - 25, y - 50);

  triangle(x + 35, y - 30, x + 5, y - 30, x + 25, y - 50);
  push();
  ellipseMode(CENTER);
  //noStroke();
  ellipse(x, y, 100, 84);
  pop();

  //pig nose
  ellipse(x, y + 6, 38, 20);
  ellipse(x - 8, y + 6, 5, 8);
  ellipse(x + 8, y + 6, 5, 8);
  fill(255);

  //pig eyes
  push();
  fill(0);
  circle(x - 14, y - 6, 3);
  circle(x + 14, y - 6, 3);
  pop();
  pop();
}
function pigbody(xp, yp) {
  push();
  rectMode(CENTER);
  noStroke();
  rect(xp, yp, 85, 55, 20);
  pop();
}
function limb(xcenter, ycenter, rectlength, rectwidth, angle) {
  push();
  translate(xcenter, ycenter);
  rotate(angle);
  rect(0, 0, rectlength, rectwidth, 10);
  pop();
}
function bigpig(x, y) {
  //     push();
  //   limb(width / 2 - 34, height / 2 + 39, 26, 12, 9.7+jump);
  //   limb(width / 2 + 30, height / 2 + 30, 26, 12, 50-jump);
  //   limb(width / 2 - 28, height / 2 + 72, 26, 15, 90+jump);
  //   limb(width / 2 + 36, height / 2 + 66, 26, 15, 45-jump);
  //   pigbody();
  //   pig(width / 2, height / 2);

  //   pop();
  push();
  limb(x - 34, y + 39, 26, 12, 9.7 + jump);
  limb(x + 30, y + 30, 26, 12, 50 - jump);
  limb(x - 28, y + 72, 26, 15, 90 + jump);
  limb(x + 36, y + 66, 26, 15, 45 - jump);
  pigbody(x, y + 55);
  pig(x, y);

  pop();
}
