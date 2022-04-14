let collectedPillSound;
let playerImage;
let deathSound=[];
class Player {
  constructor(radius = 34) {
    this.radius = radius;
    this.x = W/2;
    this.y = H-56;
    this.g = 4;
    this.yVelocity = -56;
    this.xVelocity = 12;
    this.onGround = true;
    this.alive = true;
    this.collectedCoins = 0;
    this.f = 0;
    this.t=0;
    this.slow=1;
  }
  display() {
    textSize(60);
    image(playerImage,this.x-this.radius, this.y-this.radius, 2*this.radius,2*this.radius );
    
    if(!this.alive){
      fill(0,120,0,140);
      ellipse(this.x, this.y , 2*this.radius);
    }
    
    this.onGround = (this.y === H-56);
    
    if (this.alive)
      this.f++;
    
    this.t=floor(this.f / 60);
    fill(255);
    text(this.t + 's', W-100, 60);

    text('medicine: ' + this.collectedCoins, 10, 60);

  }

  move() {
    if (keyIsDown(UP_ARROW) && this.alive)
      this.onGround = false;
    if (!this.onGround) {
      this.y += this.yVelocity * this.slow;
      this.yVelocity += this.g * this.slow;
      if (this.y >= H - 56) {
        this.yVelocity = -56;
        this.y = H - 56;
        this.onGround = true;
      }
    }
    if (keyIsDown(LEFT_ARROW) && this.x > this.radius)
      this.x -= this.xVelocity * this.slow;
    if (keyIsDown(RIGHT_ARROW) && this.x < W - this.radius)
      this.x += this.xVelocity * this.slow;
  }
  die() {
    if(this.alive){
      this.alive = false;
      random(deathSound).play();
    }
  }
  collected(pill) {
    return (this.radius + pill.radius >= dist(this.x, this.y, pill.x, pill.y));
  }
}