var fireworks = [];

var gravity;

function setup() {

  createCanvas(windowWidth, windowHeight);

  //colorMode(HSB);  //파티클 색상과 관련있음

  gravity = createVector(0, 0.2);

  stroke(255);

  strokeWeight(4);

  background(0);

}

function draw() {

  colorMode(RGB);

  background(0, 0,0,25);

  if(random(1) < 0.03){

    fireworks.push(new Firework());

  }

  for(var i = fireworks.length -1; i >=0; i--){

    fireworks[i].update();

    fireworks[i].show();

    if(fireworks[i].done()){

      fireworks.splice(i, 1); //파티클 사라지게함

    }

  }

  console.log(fireworks.length); //콘솔에 파티클의 위치나타내기

}



function Particle(x, y, hu, firework){

  this.pos = createVector(x, y);

  this.firework = firework;

  this.lifespan = 155;

  this.hu = hu;

  if(this.firework) {

   this.vel = createVector(0,random(-12, -8));

  }else{

   this.vel = p5.Vector.random2D();

    this.vel.mult(random(2,20));  //불꽃 속도

  }

 

  this.acc = createVector(0,0);

  

  this.applyForce = function(force){

    this.acc.add(force);

  }

  

  this.update = function(){

    if(!this.firework){

      this.vel.mult(1.0);  //흩어지는 범위

      this.lifespan -= 0.05;

    }

    this.vel.add(this.acc);

    this.pos.add(this.vel);

    this.acc.mult(1.7);

  }

  

  this.done = function(){

   if(this.lifespan < 0) {

     return true;

   } else {

     return false;

   }

  }

  

  this.show = function(){

   // colorMode(HSB);

    if(!this.firework){

      strokeWeight(2);

      stroke(255 ,255, 255);

      } else {

        strokeWeight();

        stroke(hu, 255, 255); 

        }  

      point(this.pos.x, this.pos.y);

  } 

}



function Firework(){

  this.hu = random(255); 

  this.firework = new Particle(random(width), height, this.hu, true); //파티클 색상추가

  this.exploded = false;

  this.particles = [];

  

  this.done = function(){

    if(this.exploded && this.particles.length == 0){

      return true;

    } else {

      return false;

    }

  }

  

  this.update = function(){

    

    if(!this.exploded){

    this.firework.applyForce(gravity);

    this.firework.update();

       

    if(this.firework.vel.y >= 0){

      this.exploded = true;

      this.explode();

      }      

    }

    for(var i = this.particles.length-1; i>= 0 ; i--){

      this.particles[i].applyForce(gravity);

      this.particles[i].update();

      if(this.particles[i].done()){

        this.particles.splice(i, 1);  //splice()무언가를 삭제하는 기능

      }

    }

  }

   
// 파티클 크기
  this.explode = function(){

    for(var i =-700; i < 150; i++){

      var p = new Particle(this.firework.pos.x, this.firework.pos.y,this.hu, false);

      this.particles.push(p);

    }

  }

  

  this.show = function(){

    if(!this.exploded){

    this.firework.show();

    }

    for(var i =0; i < this.particles.length; i++){

      this.particles[i].show();

    }

  }

}