/* 3D Game Skybox Stage Test By Spread Wing Studio

[C++ Backend For P5.js / Processing]
[libxd] A simple 2D graphics library for C++
https://bernhardfritz.github.io/libxd/#/

[piksel] A simple 2D graphics library for C++
https://bernhardfritz.github.io/piksel/#/
-------------------------------------
Hardware accelerated rendering
Can be compiled to WebAssembly
Intuitive API similar to Processing
*/

let img;
let img1, img2, img3, img4, img5, img6;
let jumpStartTimeMs = [];  // When each jump started or null if not jumping
let positions = [];
let selected_player = 0;
let mouseHasMoved = false;
let febble;
var counter;
var maxTime; 

function preload() {
  img = loadImage('images/stone_texture.png');
  img1 = loadImage('images/arid2_bk.jpg');
  img2 = loadImage('images/arid2_ft.jpg');
  img3 = loadImage('images/arid2_rt.jpg');
  img4 = loadImage('images/arid2_lf.jpg');
  img5 = loadImage('images/arid2_up.jpg');
  img6 = loadImage('images/arid2_dn.jpg');
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

// Small Box2
  push();
  translate(50, 160, 200); // If Box (Size 50), Cube & Plane Touch Part Value = 160
  rotateZ(TAU * 0.25);
  //pass image as texture
  texture(img1, img2, img3, img4, img5, img6);
  box(7300, 9994, 4840, 4850, 5800, 5830);
  pop();
   });
} 

    if (fill > 200) {
  	count = count + 1; // ADD 1 TO COUNT
  } 
    
  
  if (counter-startTime < maxTime) {
  counter=millis();
  }  else { done=true;  }
  // create the color for fill progressbar
  fill(255,200,100);
  
  // no stroke for draw
  noStroke();
  // show all text variables and progressbar
  rect(10, 30,map(counter-startTime,0,maxTime,0,320), 30 );

  
  if (fill > 200) {
  	count = count + 1; // ADD 1 TO COUNT
  } 
    
  
  if (counter-startTime < maxTime) {
  counter=millis();
  }  else { done=true;  }
  // create the color for fill progressbar
  fill(155,200,100);
  
  // no stroke for draw
  noStroke();
  // show all text variables and progressbar
  rect(10, 80,map(counter-startTime,0,maxTime,0,320), 30 );
 
  if (fill > 200) {
  	count = count + 1; // ADD 1 TO COUNT
  } 

function drawText(font) {
  fill('#ED225');
  textFont(font, 36);
  text1('Player', 10, 50);
  fill('#AD352');
  textFont(font, 36);
  text2('Gauge', 10, 50);
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
  

