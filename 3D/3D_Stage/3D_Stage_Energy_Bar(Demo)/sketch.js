// 3D Game Texture Stage Test By Spread Wing Studio

let img1;
var drop = [];
var counter;
var maxTime;

particles = [];


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
    for (var i = 0; i < 100; i++) {
     drop[i] = new Drop(0);
  }
  counter = 0; 
  startTime= millis(); 
  maxTime=int(random(100,200)); 
  done=false;
  
  img1 = loadImage('images/stone_texture.png');
  camera(50,-50, 2000, 30, 30, 50, 0, 100, 0);
  normalMaterial();
  //debugMode(GRID);

}

function draw() {
  background(100, 100, 170);
  
  orbitControl();
  
  push();
  rotateX(TAU * 0.25);
  texture(img1);
  plane(2000, 2000);
  pop();
  
  for (var i = 0; i < 100; i++) {
  drop[i].show();
  drop[i].update();
  }
  
   if (fill > 200) {
  	count = count + 1; // ADD 1 TO COUNT
  } 
    
  
  if (counter-startTime < maxTime) {
  counter=millis();
  }  else { done=true;  }
  // create the color for fill progressbar
  translate(10, -500, 120);
  rotateX(TAU*0.5);
  fill(255,200,100);
  text('Player', 10, 25);
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
  fill(255,200,100);
  text('Enemy', 10, 75);
  // no stroke for draw
  noStroke();
  // show all text variables and progressbar
  rect(10, 80,map(counter-startTime,0,maxTime,0,320), 30 );
}

  
  
  translate(-240, -100, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(70);
  pop();
  
  push();
  translate(-240, -100, 0);
  normalMaterial();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
  pop();
 
  
  
  
  function draw2() {
  background(0);
  
 // loop through all the bugs backwards
  // looping backwards lets us see older particles on top
  for(let i = bugs.length -1; i>= 0; i--){
   	bugs[i].move();
    bugs[i].show();
    bugs[i].shrink();
    
    if(bugs[i].radius <= 0 ){
      //remove the dead ones
      bugs.splice(i, 1);
    }
    
  }
  
  // make more fire!!!
    let x = 200;
    let y = 300;
    let radius = random(30,50);
    let b = new Bug(x, y, radius);
    bugs.push(b);
}

class Bug{
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempR;
    
    // pick a random color
    this.color = color(255);
    let r = random(3);
    if(r < 1){
      this.color = color(255,100,20,50); // orange
    } else if(r >= 1 && r < 2 ){
      this.color = color(255, 200, 10, 50); // yellow
    } else if(r >= 2 ){
      this.color = color(255, 80, 5, 50); // reddish
    }
    
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }

  move() {
    this.x += random(-5, 5);
    this.y -= random(1, 3);
  }
  
  shrink(){    
   // shrink size over time
   this.radius-=0.4;
  }
}

function Drop() {
 this.x = random(0, windowWidth, WEBGL);
 this.y = random(0, -windowHeight, WEBGL);

 this.show = function() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, 1, 30);
   }

  
  this.update = function() {
      this.speed = random(100, 100);
      this.gravity = 1.05;
      this.y  = this.y + this.speed*this.gravity;
    
     if (this.y > height) {
       this.y = random(0, -height);
     }
  }
 
}

