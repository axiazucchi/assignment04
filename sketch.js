var Min
var Hou
var cir1
var cir2

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textFont('Helvetica')
  frameRate(1);
  colorMode(RGB);

}

function draw() {
  translate(width/2,height/2);
  background (color('#D7C9AA'));
  
  var diam = 0;
  var diam2 = 0;
  
  if(width > height) {
    
    diam = width;
    diam2 = width;
  } else {
    
    diam = height;
    diam2 = height;
  } 
  
   if(height > width) {
    
    diam = width;
    diam2 = width;
  
  } else {
    
    diam = height;
    diam2 = height;

  }
  
  var sc = map(second(), 0, 60, -90, 360-90);
  var mn = map(minute(), 0, 60, -90, 360-90);
  var hr = map(hour(), 0, 12, -90, 360-90);
  
  Min = new clockHand (135,0,12);
  Hou = new clockHand (100,0,20);
  cir1 = new clockHand (0,0,270);
  cir2 = new clockHand (0,0,200);
  
  var d = day();
  var y = year();
  


//circle hour
  strokeWeight(1.5);
  noFill();
  stroke(color('#F0F3F5'));
  cir1.display();

//circle min 
  strokeWeight(4);
  noFill();
  stroke(color('#F0F3F5'));
  cir2.display();
  
  stroke(color('#D7C9AA'));
  strokeWeight(3);
  line(300,0,-300,0);
  line(0,300,0,-300);
  
  //day and year
  push()
  rotate(sc);
  textSize(12);
  fill(color('F2F6D0'));
  noStroke();
  textAlign(CENTER);
  textStyle(NORMAL);
  text(d, 0, -185);
  rotate(180);
  text(y, 0, -185);
  pop();
  
  
  
//seconds
  push();
  rotate(sc);
  stroke(color('#0B7A75'));
  strokeWeight(4);
  line(-180,0,-190,0);
  line(180,0,190,0);
  pop();
  
  
//month  
  textSize(10);
  fill(color('F2F6D0'));
  stroke(color('F2F6D0'));
  strokeWeight(1);
  textAlign(CENTER);
  text('O', -30, 0);
  text('C', 0, 0);
  text('T', 30, 0);
  
  
  
//minutes

  push();
  rotate(mn);
  noStroke();
  fill(color('#7B2D26'));
  Min.display();
  pop();




//hours
  push();
  rotate(hr);
  noStroke();
  fill(color('#7B2D26'));
  Hou.display();
  pop();



  
}





function clockHand(tempX, tempY, tempSize) {
  
  this.x = tempX;
  this.y = tempY;
  this.size = tempSize;



this.display = function() {
    
    ellipse(this.x,this.y,this.size);
  }
 


}


function windowResized() {
resizeCanvas(windowWidth, windowHeight);

}