let enemyImage;
class Enemy{
  constructor(radius=20){
    this.radius=radius;
    this.x=random([1,W-1]);
    this.y=random(120,H-40);
    this.speed=random(6,18.01);
    this.slow=1;
    if(this.x<W/2)this.dir=1;
    else this.dir=-1;
  }
  display(){
    image(enemyImage,this.x-this.radius-7, this.y-this.radius-7, 2*this.radius+14,2*this.radius+14 );
    
  }
  kills(player){
  return ( dist(this.x,this.y,player.x,player.y)< player.radius+this.radius)
  }
  move(slow){
  this.x+=this.dir*this.speed*this.slow;
  }
  onScreen(){
    return this.x>0&&this.x<W;
  }  
}
