class Game {
  constructor(highestScore=0){
    this.player=new Player();
    this.enemies=[];
    this.enemies[0]=new Enemy();
    this.coin =new Coin();
    this.slow =1;
    this.highestScore=highestScore;
  }
  
  play(){
    
    this.coin.display();
    this.player.display();
    textSize(60);
    fill(255);
    text('Highest Score: '+this.highestScore, W / 2 - 150, 60 );
  
    if (this.player.collected(this.coin)) {
      this.player.collectedCoins=floor((this.player.collectedCoins+1)*100)/100;
      collectedPillSound.play();
      this.coin = new Coin();
    }
    for (let i = 0; i < this.enemies.length ; i++) {
      this.enemies[i].display();
      if (this.enemies[i].kills(this.player))
        this.player.die();
      if (this.player.alive)
        this.enemies[i].move(this.slow);
      if (!this.enemies[i].onScreen())
        this.enemies[i] = new Enemy();
    }
    
    
    this.slowMotion();

  
    if (this.player.alive)
      this.player.move(this.slow);
    else{
      textSize(60);
      fill(255);
      text('Should\'ve stayed home', W / 2 - 325, H / 2 - 35 );
      text('Press any key to restart', W / 2 - 330, H / 2 + 35);
      if( this.player.t>this.highestScore )
        this.highestScore=this.player.t;
    }
  
    let enemies=function(second){
      return floor(8.2-7.2 * Math.pow(2,-second/31));
    }
    
    if( enemies(this.player.f/60) > this.enemies.length ){
      this.enemies[this.enemies.length] = new Enemy();
    }  
    
  }
  
  goesBoom() {
  if (this.player.collectedCoins >= 5 &&this.player.alive) {
    this.player.collectedCoins = floor(this.player.collectedCoins * 100 - 500)/100;
    for (let i = 0; i < this.enemies.length; i++)
      this.enemies[i] = new Enemy();
  }
}
    
  slowMotion() {
  if (keyIsDown(88) && this.player.collectedCoins >= 0.01 && this.player.alive) {
    this.player.slow = 0.4;
    for (let i = 0; i < this.enemies.length; i++){
      this.enemies[i].slow = 0.4;
    }
    this.player.collectedCoins = floor(100 * this.player.collectedCoins-1) / 100;
  } else {
    this.player.slow = 1;
    for (let i = 0; i < this.enemies.length; i++)
      this.enemies[i].slow = 1;
  }
}

}
