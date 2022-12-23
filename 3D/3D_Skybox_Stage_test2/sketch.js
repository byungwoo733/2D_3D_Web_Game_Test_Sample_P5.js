// 3D Game Skybox Stage Test By Spread Wing Studio

const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2, c1, c2;
let cam;
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let positions = [];
let selected_player = 0;
let mouseHasMoved = false;


function preload() {
  img = loadImage('images/stone_texture.png');
  img1 = loadImage('images/back.bmp');
  img2 = loadImage('images/front.bmp');
  img3 = loadImage('images/left.bmp');
  img4 = loadImage('images/right.bmp');
  img5 = loadImage('images/top.bmp');
  img6 = loadImage('images/bottom.bmp');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(10, 100, 1000, 0, 0, 0, 0, 1, 0);
  //camera(0, 30, 1000, 0, 0, 0, 1250, 0, 0);
  background(0);
  smooth();
  for (let x = -300; x <= 300; x += 100) {
    positions.push(createVector(x, 0, 0)) 
  }
  b1 = color(255);
  b2 = color(0);
  c1 = color(204, 102, 0);
  c2 = color(0, 102, 153);

  noLoop();
}

function draw() {
  orbitControl();
  normalMaterial();
  

  const pos = positions[selected_player];
  handleInput(pos);
  
  if (mouseHasMoved && mouseY >= 0 && mouseY < height)
    rotateY(cMap(mouseX, 0, width - 1, -TAU / 16, TAU / 16));
  
  
  for (let x = -500; x <= 500; x += 50) {
    
    // Plane
  push();
  translate(-207, 185, 300); // Plane Touch Part Value = 185
  rotateX(TAU * -0.25);
  //pass image as texture
  texture(img);
  plane(1000, 1000, 5300);
  pop();
}
  
   positions.forEach((p, i) => {
  if (i === selected_player) stroke('white'); else noStroke();
     push();
     //translate(p.x, p.y - getJumpHeight(i), p.z);
     box(50, 50);
     pop();
  
     
  // Small Box1
  push();
  translate(50, 160, 200); // If Box (Size 50), Cube & Plane Touch Part Value = 160
  rotateZ(TAU * 0.25);
  //pass image as texture
  texture(img1, img2, img3, img4, img5, img6);
  box(7300, 9994, 4840, 4850, 5800, 5830);
  pop();
   });
} 
  
/*  // Box1
  push();
  translate(-400, 85, 350); // // If Box(Size 200), Plane Touch Part Value = 85
  rotateY(TAU * 0.25);
  //pass image as texture
  texture(img);
  box(200, 200, 350);
  pop();
  });
} */
 
  
  function mouseMoved() {
   mouseHasMoved =  true;
  }
  

function handleInput(pos) {
  if (!keyIsPressed) return;

  const num = Number(key);
  if (num >= 1 && num <= positions.length) {
    selected_player = num - 1
  } else {
    const shiftMult = keyIsDown(SHIFT) ? 10 : 1;
    if (keyIsDown(UP_ARROW))    pos.z -= 3 * shiftMult;
    if (keyIsDown(DOWN_ARROW))  pos.z += 3 * shiftMult;
    if (keyIsDown(LEFT_ARROW))  pos.x -= 3 * shiftMult;
    if (keyIsDown(RIGHT_ARROW)) pos.x += 3 * shiftMult;
    if (keyIsDown(32)) { // Space
      if (!jumpStartTimeMs[selected_player]) {
        jumpStartTimeMs[selected_player] = millis();
      }
    }
  }
}

const cMap = (n, l1, h1, l2, h2) => map(constrain(n, l1, h1), l1, h1, l2, h2);