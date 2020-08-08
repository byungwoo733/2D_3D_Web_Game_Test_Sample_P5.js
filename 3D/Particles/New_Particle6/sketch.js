let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(0, -30, 1000, 0, 0, 0, 0, 1, 0);
}

function draw() {
  background(0);
  orbitControl();
  for (let i = 0; i < 100; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length-1; i >= 20; i--) {
    let p = new Particle();
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      //remove this particle
      particles.splice(i, 1);
    }
  }
}

class Particle {
  
  constructor() {
    this.x = 300;
    this.y = 380;
    this.z = 350;
    this.vx = random(-1, 1);
    this.vy = random(-50, -10);
    this.vz = random(-1, -0.1);
    this.alpha = 455;
  }
  
  finished(){
    return this.alpha < 0;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;
    this.alpha -= 5;
  }
  
  show() {
    noStroke();
    fill(155, 50, 50, this.alpha);
    ellipse(this.x, this.y, this.z, 16);
  }
}
