//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context; 
//pipes
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

//physics
let velocityX = -2; //pipe moving left speed
let velocityY = 0; // spaceship up down
let gravity = 0.4;

let gameOver = false;
//spaceship
let spaceWidth = 34;
let spaceHeight = 24;
let spaceX = boardWidth/8;
let spaceY = boardHeight/2;
let spaceImg;

let space = {
  x : spaceX,
  y : spaceY,
  width : spaceWidth,
  height : spaceHeight,
}

window.onload = function(){
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");



//spaceship



//load images
spaceImg = new Image();
spaceImg.src = "./assets/imgs/spaceShip.png";
spaceImg.onload = function(){
context.drawImage(spaceImg, space.x, space.y, space.width, space.height);}

topPipeImg = new Image();
topPipeImg.src = "./assets/imgs/toppipemod.png";

bottomPipeImg = new Image();
bottomPipeImg.src = "./assets/imgs/bottompipemod.png"
requestAnimationFrame(update);
setInterval(placePipes, 1500); //setting timing for pipes
document.addEventListener("keydown", moveShip)
}

function update(){
  requestAnimationFrame(update);
  if (gameOver){
    return;
  }
  context.clearRect(0, 0, board.width, board.height);

  //spaceship
  velocityY += gravity
  space.y = Math.max(space.y + velocityY, 0); //apply gravity doesnt go passed canvas
  context.drawImage(spaceImg, space.x, space.y, space.width, space.height);

  if (space.y > board.height){
  gameOver = true;
}
  //pipes
  for (let i = 0; i <pipeArray.length; i++){
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

    if (detectCollision(space, pipe)){
      gameOver = true;
    }
  }
 
}

function placePipes(){
  if (gameOver) {
    return;
  }
  // pipe height being made random
  let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
  let openingSpace = board.height/4;


  let topPipe = {
    img : topPipeImg,
    x : pipeX,
    y: randomPipeY,
    width : pipeWidth,
    height : pipeHeight,
    passed : false // to see if space ship passed pipe
  }
  pipeArray.push(topPipe); //adds new pipe to array

  let bottomPipe = { 
    img : bottomPipeImg,
    x : pipeX,
    y : randomPipeY + pipeHeight + openingSpace,
    width : pipeWidth,
    height : pipeHeight,
    passed : false
  }
  pipeArray.push(bottomPipe)
}

function moveShip(e){
  if (e.code == "Space" || e.code == "ArrowUp" || e.code =="KeyX"){
    velocityY = -6;
  }
}

function detectCollision(a, b){
  return a.x <b.x +b.width &&
  a.x + a.width > b.x &&
  a.y < b.y + b.height && 
  a.y + a.height > b.y;
}