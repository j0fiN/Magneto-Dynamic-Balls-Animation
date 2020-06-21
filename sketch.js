
let boxes = [];
let gen;
function setup() {
  createCanvas(400, 400);
  for (let i = 1; i<=300; i++){
    boxes[i] = new ball(floor(random(25,375)), floor(random(25,375)));
  }
  
}

function draw() {
  // noLoop();
  background(255, 255, 255);
  for (let i = 1; i<=300; i++){
    boxes[i].show();
    boxes[i].move();
    if(mouseX > 30 && mouseX < width-30 && mouseY>30 && mouseY < height-30)
    {boxes[i].update();}
    
  }
  
}
function mouseClicked(){print(boxes[1].distance());print(width, height);
                        print(mouseX, mouseY)}

