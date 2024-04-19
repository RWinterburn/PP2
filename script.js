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
}

function update(){
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);

  //spaceship
  context.drawImage(spaceImg, space.x, space.y, space.width, space.height)

  //pipes
  for (let i = 0; i <pipeArray.length; i++){
    let pipe = pipeArray[i];
    pipe.x += velocityX;
    context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height)
  }
 
}

function placePipes(){
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