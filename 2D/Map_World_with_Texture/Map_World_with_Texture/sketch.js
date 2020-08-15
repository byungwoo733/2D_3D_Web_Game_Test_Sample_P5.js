/* Video Game By Spread Wing Studio */

const UNIT = 128; // each unit in the world is 128 pixels.
const WIDTH = 10; // width, in world units.
const HEIGHT = 10; // height, in world units.

let img;
let stone_texture;

function preload() {
  img = loadImage('images/stone_texture.png');
}
function setup() {
  createCanvas(640, 480); // 640 -> width, 480 -> height
}

function draw() {
  background(img);
  image(img, 0, 0, 640, 480);
  fill(155, 240, 240, 255);
  strokeWeight(4);
  stroke(50);
  
  // x, y, width, height
  
  //Up Wall
  [
    rect(0, 0, 40, 40),
    rect(40, 0, 40, 40),
    rect(80, 0, 40, 40),
    rect(120, 0, 40, 40),
    rect(160, 0, 40, 40),
    rect(200, 0, 40, 40),
    rect(240, 0, 40, 40),
    rect(280, 0, 40, 40),
    rect(320, 0, 40, 40),
    rect(360, 0, 40, 40),
    rect(400, 0, 40, 40),
    rect(440, 0, 40, 40),
    rect(480, 0, 40, 40),
    rect(520, 0, 40, 40),
    rect(560, 0, 40, 40),
  
  // Right Wall
    rect(600, 0, 40, 40),
    rect(600, 40, 40, 40),
    rect(600, 80, 40, 40),
    rect(600, 120, 40, 40),
    rect(600, 160, 40, 40),
    rect(600, 200, 40, 40),
    rect(600, 240, 40, 40),
    rect(600, 280, 40, 40),
    rect(600, 320, 40, 40),
    rect(600, 360, 40, 40),
    rect(600, 400, 40, 40),
    rect(600, 440, 40, 40),
  
  //Down Wall
    rect(0, 440, 40, 40),
    rect(40, 440, 40, 40),
    rect(80, 440, 40, 40),
    rect(120, 440, 40, 40),
    rect(160, 440, 40, 40),
    rect(200, 440, 40, 40),
    rect(240, 440, 40, 40),


    rect(360, 440, 40, 40),
    rect(400, 440, 40, 40),

    rect(520, 440, 40, 40),
    rect(560, 440, 40, 40),
  
  
  //Left Wall
    rect(0, 40, 40, 40),
    rect(0, 80, 40, 40),
    rect(0, 120, 40, 40),
    rect(0, 160, 40, 40),
    rect(0, 200, 40, 40),

    rect(0, 320, 40, 40),
    rect(0, 360, 40, 40),
    rect(0, 400, 40, 40),
  
  //Middle Wall (1)
    rect(160, 240, 40, 40),
    rect(280, 40, 40, 40),
    rect(360, 80, 40, 40),
    rect(360, 160, 40, 40),
    rect(360, 200, 40, 40),
    rect(360, 280, 40, 40),
    rect(360, 320, 40, 40),
    rect(360, 360, 40, 40),
    rect(360, 400, 40, 40),

    
    rect(80, 120, 40, 40),
    rect(120, 160, 40, 40),
    rect(120, 120, 40, 40),
    rect(120, 200, 40, 40),
    //rect(160, 200, 40, 40),
    //rect(200, 200, 40, 40),


    
    rect(80, 200, 40, 40),
    rect(80, 160, 40, 40),
    rect(180, 300, 40, 40),
    rect(240, 200, 40, 40),
    //rect(240, 240, 40, 40),
    //rect(240, 300, 40, 40),
    ];
}

