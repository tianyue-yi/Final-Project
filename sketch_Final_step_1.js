let stu;
let classroom;
let classroomTop;
let x;
let y;

function preload() {
  //classroom = loadImage ('classroom before zoomed in.png');
  classroomTop = loadImage ('Classroom setting.png');
  //stu = loadAnimation ('stu_stable.png', 'stu_vleft.png', 'stu_stable.png', 'stu_vright.png');
  stu = loadAnimation ('stu_anismaller1.png', 'stu_anismaller3.png', 'stu_anismaller1.png', 'stu_anismaller2.png')
}

function setup() {
  createCanvas(classroomTop.width, classroomTop.height);
  print (classroomTop.width, classroomTop.height);
  for (let col = 0; col < classroomTop.width; col += 2) {
      for (let row = 0; row < classroomTop.height; row += 2) {
        let c = classroomTop.get(col, row);
        stroke (color (c), 100);
        point (col, row);
      }
    }
  frameRate(10);
}

function draw () {
  //background (220);
  stu.draw (300, 150);

}

function people (x, y) {
  fill (255);
  //noStroke ();
  stroke (50);
  strokeWeight(2);

  triangle (x, y, x + 12, y + 15, x - 12, y + 15);
  
  ellipse (x, y, 25, 20);
}