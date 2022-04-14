let pillImage;
class Coin {
  constructor(radius = 25) {
    this.radius = radius;
    this.x = random(40, W - 40);
    this.y = random(160, H - 40);
  }

  display() {
    
    image(pillImage,this.x-this.radius, this.y-this.radius , 2*this.radius, 2*this.radius);
    
  }
}
