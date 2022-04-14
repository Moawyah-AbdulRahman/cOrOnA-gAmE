const W = 1200,
        H = 600;

let backGroundImage;
let currentState = 1;

let game;
let menu;
let highestScore = 0;
const PILL_IMAGE_LINK = 'pictures\\pill.png';
const PLAYER_IMAGE_LINK = 'pictures\\player image.gif';
const BACKGROUND_IMAGE_LINK = 'pictures\\background.gif';
const ENEMY_IMAGE_LINK = 'pictures\\virus.png';
function preload() {
    backGroundImage = loadImage(BACKGROUND_IMAGE_LINK);
    pillImage = loadImage(PILL_IMAGE_LINK);
    playerImage = loadImage(PLAYER_IMAGE_LINK);
    enemyImage = loadImage(ENEMY_IMAGE_LINK);


    for (let i = 0; i < 2; i++)
        deathSound[i] = loadSound('sounds/death sound ' + (i + 1) + '.mp3');

    collectedPillSound = loadSound('sounds/collect a pill.mp3');
    
}

function setup() {
    createCanvas(W, H);
    game=new Game();
    menu = new Menu();
}

function draw() {
    image(backGroundImage, 0, 0, W, H);

    if (currentState == 0) {
        game.play();
        if (keyIsDown(27)) {
            highestScore = game.highestScore;
            game = null;
            currentState = 1;
        }
    } else {
        menu.show();
    }

}


function keyTyped() {

    if (currentState == 0) {
        if (!game.player.alive)
            game = new Game(game.highestScore);
        if (key == 'z' || key == 'Z' || key == 'ئ')
            game.goesBoom();
    } else {
        game = new Game(highestScore);
        currentState = 0;
    }

    return false;
}