float locationX, locationY, locationX2;
float velocityX, velocityY;
int timer = 0;

void setup() {
  smooth();
  size(200, 200);
  frameRate(60);
  locationX = 0;
  locationY = 0;
  locationX2 = width;
  locationY2 = 0;
  velocityX = 5;
  velocityY = 1;
}

void draw() {
  background("#ffffff");
  locationX = locationX + velocityX;
  locationY = locationY + velocityY;
  locationX2 = locationX2 + velocityX;
  locationY2 = locationY2 + velocityY;

  strokeWeight( 2 );
  stroke( #333333 );
  line(width/2, height/2, locationX, locationY);

  strokeWeight( 6 );
  stroke( #333333 );
  line(width/2, height/2, locationX2, locationY2);

  if (locationX < 0 || locationX > width) {
    velocityX = velocityX * -1;
  }
  if (locationY < 0 || locationY > height) {
    velocityY = velocityY * -1;
  }
}
