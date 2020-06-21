class ball{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.size = 50;
    this.a_x = x;
    this.a_y = y;
    this.r = floor(random(0,200));
    this.g = floor(random(100,250));
    this.b = floor(random(200,255));
    this.acc = 0.5;
    this.dir = createVector(random([-1,1]), random([-1,1]));
  }
  
  
  
  show(){
    fill( this.r, this.g,this.b);
    noStroke();
    circle(this.pos.x, this.pos.y, this.size);
    
  }
  update(){
    if(this.distance()<30 && mouseX < this.pos.x && this.pos.x < width-30){
      this.pos.x+= 2;
      // this.move();
    }
    if(this.distance()<30 && mouseX > this.pos.x && this.pos.x > 30){
       this.pos.x-= 2;
      // this.move();
    }
    if(this.distance()<30 && mouseY < this.pos.y && this.pos.y < height-30){
       this.pos.y += 2;
      // this.move();
    }
    if(this.distance()<30 && mouseY > this.pos.y && this.pos.y > 30){
       this.pos.y -= 2;
      // this.move();
    }
    // if(this.distance())
    if(this.distance()>55) {
      // this.pos.x = this.a_x;
      // this.acc = 0.1;
      // this.pos.y = this.a_y;
      this.move();
      
    }
  
  }
  
  distance(){
    return sqrt(pow((this.pos.x - mouseX),2) + pow((this.pos.y - mouseY),2));
  }
  
  move(){
    this.pos.x = this.pos.x + 2*(this.dir.x);
    this.pos.y = this.pos.y + 2*(this.dir.y);
    
    if(this.pos.x > width-30 || this.pos.x < 30){ 
      this.dir.x *= -1;
    }
    if(this.pos.y > height-30 || this.pos.y < 30){
      this.dir.y *= -1;
    }
  }
}