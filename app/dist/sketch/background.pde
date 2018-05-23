void setup() {
  smooth();
  size(1000, 1000);
  frameRate(10);
}

void draw() {
  background(#ffffff);
  
  for(int i = 0; i < 9; i++){
    stroke(random(255), random(255), random(255));
    line(random(width), random(height), random(width), random(height));
  }
  
}
