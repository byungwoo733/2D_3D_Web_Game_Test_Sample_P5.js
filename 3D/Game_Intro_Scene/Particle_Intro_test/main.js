const particles = [];
let isResizing = false;


class Particle{
     constructor(){
        this.position = createVector(Math.floor(random(window.innerWidth)), Math.floor(random(window.innerHeight)));
       
        this.speed = createVector(random(-2, 2), random(-2, 2));
       
        this.size = 6;
       
     }
  
  update(){
     this.position.add(this.speed);
    
     this.edges();
  }
  
  edges(){
    if (this.position.x < 0 || this.position.x > Math.floor(window.innerWidth)){
     this.speed.x *= -1; 
    }
    if (this.position.y < 0 || this.position.y > Math.floor(window.innerHeight)){
     this.speed.y *= -1; 
    }
  }
}