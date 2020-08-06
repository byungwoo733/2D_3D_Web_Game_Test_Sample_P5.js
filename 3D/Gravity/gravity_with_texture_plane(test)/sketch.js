// 3D Game Texture Stage Test By Spread Wing Studio

function preload() {
  img = loadImage('images/stone_texture.png');
  febble = loadModel('models/febble.obj');
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  camera(0, -3, 1000, 0, 0, 500, 0, 0, 1, 50);
  background(0);
  x=0
  yes=0;
  ytotal=0;
  yeh=0;
  force=0;
  gravitydivide=9.81;
  y=0;
}
function draw(){
  //debugMode();
  background(0);
  orbitControl();
  normalMaterial();
  
  
     // Box1
  push();
  translate(-190, 0, 350); // // If Box(Size 200), Plane Touch Part Value = 85
  rotateY(TAU * 0.25);
  //pass image as texture
  texture(img);
  box(200, 200, 350);
  pop();
  
  // Febble1 (Character)
    push();
    translate(150, 100, 200); // Plane Touch Part Value = 100
    rotate(TAU * 0.5);
    //fill(200, 200, 230); // Character Color Fill
    model(febble);
    scale(0.1, 0.1, 0.1);
   // model(febble, 50, 50, 50);
    pop();
  
  
  
  push();
  translate(100, 100);
  rotateX(TAU * 0.25);
  texture(img);
  plane(1000, 1000);
  pop();
  
  // Febble(test) (Character) with Gravity
    push();
    translate(-70,ytotal); 
    rotate(TAU * 0.5);
    //fill(200, 200, 230); // Character Color Fill
    model(febble);
    scale(0.1, 0.1, 0.1);
   // model(febble, 50, 50, 50);
    pop();
  
  // Box with Gravity
  y++;
  yeh-=0.000299
  yes-=0.000195;
  force-=0.0145;
  gravitydivide-=0.3004614;
  gravity=9.81/gravitydivide
  ytotal=y * (gravity/0.2665)
  translate(0,ytotal);
  //rotateY(yeh*0.2);
  rotateX(force*0.2);
  //rotateZ(0.2*yeh+force);
  box();
  console.log(ytotal);
  

}