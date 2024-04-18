//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context; 

//spaceship
let spaceWidth = 34;
let spaceHeight = 24;
let spaceX = boardWidth/8;
let spaceY = boardHeight/2;

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
context.fillStyle = "red";
context.fillRect(space.x, space.y, space.width, space.height)
}