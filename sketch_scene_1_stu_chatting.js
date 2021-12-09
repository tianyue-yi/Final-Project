let stu;
let x = 140;
let y1 = 130;
let y2 = 230;
let speed;

function preload() {

  stu1 = loadAnimation ('stu_anismaller1.png', 'stu_anismaller3.png', 'stu_anismaller1.png', 'stu_anismaller2.png');
  stu2 = loadAnimation ('stu_anismaller1.png', 'stu_anismaller2.png', 'stu_anismaller1.png', 'stu_anismaller3.png');
}

function setup() {
  createCanvas(800, 800);
  frameRate(10);
  speed = 0.8;
}

function draw () {
  background (220);
  classroom ();
  //stu.draw (375, 150);
  //stu.draw (375, 250); // draw students in the upper right desk +- speed of animation is accumulated?!
  //stu.draw (375, 400);
  
  if (millis() > 2000) { // first scene happens automatically after 2s
    chatting ();

    if (mouseX < 170 && mouseY < 170) { // upper left corner
      
    }
    
  }
  
  frame (mouseX, mouseY);
}

function classroom () {
  for (let i = 170; i < 500; i += 200) {
    for (let j = 100; j < 400; j += 250) { // 4 tables and 4 chairs
      noFill ();
      stroke (150);
      strokeWeight (2);
      rect (i, j, 60, 200); // tables
      rect (i - 30, j + 30 , 30, 45)
      rect (i - 30, j + 30 , 10, 45); // 2 chairs for each table
      rect (i - 30, j + 130 , 30, 45)
      rect (i - 30, j + 130 , 10, 45); 
      stu1.draw (i, j + 50);
      stu2.draw (i, j + 150);
      stu1.frameDelay = 10;
      stu2.frameDelay = 10;
    }
  }
}

function frame (x, y) { // A frame to capture specific movement in class
  for (let i = 0; i < 3; i++) {
    stroke (0);
    strokeWeight (4);
    line (x, y, x + 10, y);
    line (x, y + 160, x + 10, y + 160);
    x += 40;
    //y += i + 10;
  }
  for (let j = 0; j < 4; j++) {
    line (x - 120, y, x - 120, y + 10);
    line (x, y, x, y + 10);
    y += 50;
  }
}

function chatting () {
  noStroke ();
  fill (220);
  rect (0, 0, 230, 300); // redraw the area - I'm looking for a better way 
  stroke (150);
  strokeWeight (2);
  rect (170, 100, 60, 200); // table

  fill (220);
  noStroke ();
  rect (140, 100, 30, 180); // clear a small area
  stroke (150);
  strokeWeight (2);
  rect (x, y1, 30, 45); 
  rect (x, y1, 10, 45); 
  rect (x, y2, 30, 45); 
  rect (x, y2, 10, 45);
  stu1.draw (x + 30, y1 + 20);
  stu2.draw (x + 30, y2 + 20);
  
  y1 += speed;
  y2 -= speed;
  
  if (y1 + 45 > y2 || y1 < 130) {
    speed = -speed;
    //y2 ++;
  }
    //rect (140, 100, 30, 180);
  
  print (y1, y2);
}