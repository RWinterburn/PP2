//board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context; 

//spaceship
let spaceWidth = 34;
let spaceHeight = 24;
let spaceX

window.onload = function(){
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

}