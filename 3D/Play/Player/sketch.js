// 3D Game Texture Stage Test By Spread Wing Studio

let img;
let jumpStartTimeMs = [];  // When each jump started or null if not jumping
let positions = [];
let selected_player = 0;
let mouseHasMoved = false;
let febble;

function preload() {
  img = loadImage('images/stone_texture.png');
  febble = loadModel('models/febble.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(0, -30, 1000, 0, 0, 0, 0, 1, 0);
  smooth();
// Character Adder Part
  for (let x = 0; x <= 0; x += 100) {
   positions.push(createVector(x, 0, 0))
  }
}

function draw() {
  background(0);
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
  rotateX(TAU * 0.25);
  //pass image as texture
  texture(img);
  plane(800, 800, 200);
  pop();
}
  
     
  // Small Box1
  push();
  translate(50, 160, 200); // If Box (Size 50), Cube & Plane Touch Part Value = 160
  rotateY(TAU * 0.25);
  //pass image as texture
  texture(img);
  box(50, 50, 50);
  pop();
     
  positions.forEach((p, i) => {
  if (i === selected_player) stroke('Blue'); else noStroke();
     // Febble1 (Character)
    push();
    translate(p.x, p.y - getJumpHeight(i), p.z);
    translate(150, 185, 200); // Plane Touch Part Value = 185
    rotate(TAU * 0.5);
    //fill(200, 200, 230); // Character Color Fill
    model(febble);
    scale(0.1, 0.1, 0.1);
   // model(febble, 50, 50, 50);
    pop();
   });
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

const JUMP_DURATION_MS = 1000;
const MAX_JUMP_HEIGHT = 300;

function getJumpHeight(i) {
  if (jumpStartTimeMs[i]) {
    const timeIntoJumpMs = millis() - jumpStartTimeMs[i];
    const jumpDone = timeIntoJumpMs > JUMP_DURATION_MS;
    if (jumpDone) {
      jumpStartTimeMs[i] = null;
    } else {
      const jumpFractionDone = timeIntoJumpMs / JUMP_DURATION_MS;
      return sin(jumpFractionDone * PI) * MAX_JUMP_HEIGHT;
    }
  }
  return 0;
}

/*const cMap = (n, l1, h1, l2, h2) => map(constrain(n, l1, h1), l1, h1, l2, h2); */
  
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
 
  
 /* function mouseMoved() {
   mouseHasMoved =  true;
  } */
  

