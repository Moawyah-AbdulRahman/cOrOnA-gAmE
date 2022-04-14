class Menu{
  constructor(){
  }
  
  show(){
    fill(255);
    textSize(60);
    text('Main Menu', W / 2 - 150, 60 );
    textSize(40);
    text('Press any key to start the game.', 10, 130 );
    text('Controls:\nUse the left and right arrow keys to move left and right.\nup arrow to jump.\nX to apply slow motion effect using medicine\nZ to reset the viruses using 5 medicine.', 10, 220 );
    
    text('Remember whenever you want to go back to the main menu \npress the esc button.', 10, 510 );
    
  }
  
}
