var iss,issImg;
var  spacebgImg, SCimg1,SCimg2,SCimg3,SCimg4;
var spacecraft;
var hasDocked = false;

function preload(){
  issImg = loadImage("iss.png");
  spacebgImg = loadImage("spacebg.jpg");
  SCimg1 = loadImage("spacecraft1.png");
  SCimg2 = loadImage("spacecraft2.png");
  SCimg3 = loadImage("spacecraft3.png");
  SCimg4 = loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600,350);
  iss = createSprite(330, 130);
  iss.addImage(issImg);
  iss.scale = 0.5;
  spacecraft = createSprite(285,240);
  spacecraft.addImage(SCimg1);
  spacecraft.scale = 0.15;
}

function draw() {
  background(spacebgImg);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-2;
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(SCimg2);
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.x = spacecraft.x - 2
    spacecraft.addImage(SCimg3);
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.x = spacecraft.x + 2
    spacecraft.addImage(SCimg4);
  }
  }
  if(spacecraft.y <=(iss.y+70)&& spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("yellow");
    text("Docking successful ", 200,300);
  }
  drawSprites();
}