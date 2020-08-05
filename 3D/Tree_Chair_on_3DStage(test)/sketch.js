// 3D Game Texture Stage Test By Spread Wing Studio

var gravity = 0.1;
var box = 0;
let counter=0;

let jumpStartTimeMs = [];  // When each jump started or null if not jumping
let positions = [];
let selected_player = 0;
let mouseHasMoved = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img1 = loadImage('images/stone_texture.png');
  tree = loadModel('textures/tree.obj');
  camera(0, -30, 300, 0, 0, 0, 0, 1, 0);
  normalMaterial();
  //debugMode(GRID);
   smooth();
  for (let x = -300; x <= 300; x += 100) {
   positions.push(createVector(x, 0, 0))
  }
}

let value = 0;

function draw() {
  background(210, 150, 150);
  orbitControl();
  
    push();
    translate(77, 87);
    rotateZ(TAU * 0.5);
    model(tree);
    scale(15.3, 15.3, 15.3);
    model(tree, 50, 50, 50);
    pop();

  
  const pos = positions[selected_player];
  handleInput(pos);

  if (mouseHasMoved && mouseY >= 0 && mouseY < height)
    rotateY(cMap(mouseX, 0, width - 1, -TAU / 16, TAU / 16));
  
  for (let x = -500; x <= 500; x += 50) {
    push();
    translate(x, 77, 0);
    rotateX(TAU * 0.25);
    box(15);
    pop();
}

function deviceMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}



  positions.forEach((p, i) => {
    if (i === selected_player) stroke('white'); else noStroke();
    });
  
  for (let x = -500; x <= 500; x += 50) {
    push();
    translate(x, 85, 0);
    rotateX(TAU * 0.25);
    texture(img1);
    plane(500, 500);
    pop();
} 

  function player(){
  if (counter-startTime < maxTime) {
  counter=millis();
  }  else { done=true;  }
  

  // create the color for fill progressbar
  for (let x = -500; x <= 500; x += 50) {
    push();
    translate(x, 85, 0);
    rotateX(TAU * 0.25);
    fill(255,200,100);
    text('Player', 10, 25);
  // no stroke for draw
    noStroke();
  // show all text variables and progressbar
    rect(10, 30,map(counter-startTime,0,maxTime,0,320), 30 );
    pop();
}
  }
  
  if (fill > 200) {
  	count = count + 1; // ADD 1 TO COUNT
  } 
    
  function Enemy(){
  if (counter-startTime < maxTime) {
  counter=millis();
  }  else { done=true;  }

  // create the color for fill progressbar
    for (let x = -500; x <= 500; x += 50) {
    push();
    translate(x, 105, 0);
    rotate(TAU * 0.25);
    fill(255,200,100);
    text('Enemy', 10, 75);
  // no stroke for draw
    noStroke();
  // show all text variables and progressbar
    rect(10, 80,map(counter-startTime,0,maxTime,0,320), 30 );
    pop();
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
}
