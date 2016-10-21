document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var boardSize = prompt("What board size would you like to play? Please enter any number from 3 to 6.");

var board = {
cells: []
}
// var board = {
//   cells: [
// {
// row: 0,
// col: 0,
// isMine: false,
//   hidden: true,
// },
// {
// row: 0,
// col: 1,
// isMine: true,
//   hidden: true,
// },
// {
// row: 0,
// col: 2,
// isMine: false,
//   hidden: true,
// },
// {
// row: 1,
// col: 0,
// isMine: false,
//   hidden: true,
// },
// {
// row: 1,
// col: 1,
// isMine: true,
//   hidden: true,
// },
// {
// row: 1,
// col: 2,
// isMine: false,
//   hidden: true,
// },
// {
// row: 2,
// col: 0,
// isMine: false,
//   hidden: true,
// },
// {
// row: 2,
// col: 1,
// isMine: false,
//   hidden: true,
// },
// {
// row: 2,
// col: 2,
// isMine: true,
//   hidden: true,
// }
// ]
// };

function startGame () {
  // Don't remove this function call: it makes the game work!
  while (boardSize < 3 || boardSize > 6 || boardSize === NaN) {
    boardSize = prompt("Please any number from 3 to 6");
  };

  createBoard();
randomizeMines();
  for (var i = 0; i < board.cells.length; i++){
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  };

  lib.initBoard();

    // Next, we add an event listener to it:
    document.addEventListener('click',checkForWin);
  document.addEventListener('contextmenu',checkForWin);
}

//function to create a random number of mines

function randomizeMines (){
  var pointer = Math.random();
  if (pointer < 0.3) {
  return true;
  }
  return false;
}

// function to Create a Board
function createBoard() {
  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      board.cells.push(
        {
          row: i,
          col: j,
          isMine: randomizeMines(),
        hidden: true
        }
      )
    }
  }
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
for (var i = 0; i < board.cells.length; i++) {
  if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
    return;
  }
  if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
    return;
  }
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
lib.displayMessage('You win!')
  audio.play();
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  count = 0;
  var surroundingCells = getSurroundingCells(cell.row, cell.col);
  for (var i = 0; i < surroundingCells.length; i++){
    if (surroundingCells[i].isMine === true) {
      count += 1;
        }
    }
return count;
}

var audio = new Audio("audio/Cardinal-bird-call.mp3");
