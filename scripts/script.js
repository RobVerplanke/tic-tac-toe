/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const GameBoard = (() => {
  let board = ['','','','','','','','',''];

  const resetBoard = () =>{
    board = ['','','','','','','','',''];
  }

  const setMarker = (index) => {
    board[index] = GameController.getPlayerMarker();
  }

  const getGameBoard = () => board;

  // checks whether selected cell is empty or not
  const checkAvailableCell = (index) => {
    if (board[index] !== '') {
      return false;
    } 
    return true;
  };

  // check if there are three markers in a row (not including empty cells)
  const checkForWin = () => {
    if ((board[0] === board[1] && board[0] === board[2] && (!(board[0] === ''))) ||
        (board[3] === board[4] && board[3] === board[5] && (!(board[3] === ''))) ||
        (board[6] === board[7] && board[6] === board[8] && (!(board[6] === ''))) ||
        (board[0] === board[3] && board[0] === board[6] && (!(board[0] === ''))) ||
        (board[1] === board[4] && board[1] === board[7] && (!(board[1] === ''))) ||
        (board[2] === board[5] && board[2] === board[8] && (!(board[2] === ''))) ||
        (board[0] === board[4] && board[0] === board[8] && (!(board[0] === ''))) ||
        (board[2] === board[4] && board[2] === board[6] && (!(board[2] === '')))) {
      // freeze the display when updating the board by not adding a event listener to cells
      DisplayController.updateGrid('freeze');
      DisplayController.announceWinner();
      return true;

      // check if the game ended in a draw
    } if(!(board.includes(''))) {
      DisplayController.updateGrid('freeze');
      DisplayController.announceDraw();
      return true;
    } 
        
    // continue the game if there is no winner and no draw
    GameController.switchPlayers();
    DisplayController.showCurrentPlayer();
    return false;
  };    

  return { resetBoard, setMarker, getGameBoard, checkAvailableCell, checkForWin };
})();


// ***** Player object *****

const Player = (name, marker) => ({ name, marker });
const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');


// ***** Game controller *****

const GameController = (() => {
  let currentPlayer = player1;

  const newGame = () =>{
    // input player names / marker choice
    currentPlayer = player1;
    DisplayController.showCurrentPlayer();
    GameBoard.resetBoard();
    DisplayController.updateGrid();
  };

  const resetGame = () =>{
    currentPlayer = player1;
    DisplayController.showCurrentPlayer();
    GameBoard.resetBoard();
    DisplayController.updateGrid();
  };

  const switchPlayers = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };
    
  const getPlayerName = () => currentPlayer.name;

  const getPlayerMarker = () => currentPlayer.marker;

  // if selected cell is empty, place a marker
  const placeMarker = (index) => {
    if(GameBoard.checkAvailableCell(index) === true){
      GameBoard.setMarker(index);

      if(GameBoard.checkForWin() === false){
        DisplayController.updateGrid();
      }
    }
  };

  return { newGame, resetGame, getPlayerName, getPlayerMarker, placeMarker, switchPlayers };
})();


// ***** Display controller *****

const DisplayController = (() => {
  const displayBoard = document.querySelector('#grid-container');
  const displayMessage = document.querySelector('#game-display');
  const resetButton = document.querySelector('#resetButton');
  const newGameButton = document.querySelector('#newGameButton');

  // set event listener on the nav buttons
  resetButton.addEventListener('click', GameController.resetGame);
  newGameButton.addEventListener('click', GameController.newGame);

  const showCurrentPlayer = () => {
    displayMessage.innerHTML = `<p>${GameController.getPlayerName()}'s turn`;
  };

  const announceWinner = () => {
    displayMessage.innerHTML = `<p>${GameController.getPlayerName()} wins!</p>`
  }

  const announceDraw = () => {
    displayMessage.innerHTML = '<p>It\'s a draw!</p>'
  }
    
  // clear board on display and create a new cell for each array item
  const updateGrid = (gameStatus) => {
    let index = 0;
    let currentBoard = GameBoard.getGameBoard();
    displayBoard.innerHTML = '';
    currentBoard.forEach(boardItem => {
      createCell(boardItem, index, gameStatus)
      index++;
    });
  };

  // create a cell (button) on the display
  const createCell = (boardItem, index, gameStatus) => {
    const displayCell = document.createElement('button');  
    displayBoard.append(displayCell);
    setCell(displayCell, 'cell', boardItem, index, gameStatus);
  };
        
  // set properties of the newly created cell
  const setCell = (displayCell, className, boardItem, index, gameStatus)=> {
    const newCell = displayCell;
    newCell.className = className;
    newCell.innerText = boardItem;
    newCell.setAttribute('data', index);
    if(gameStatus !== 'freeze'){
      newCell.addEventListener('click', () => GameController.placeMarker(index));
    }
  };
    
  return { updateGrid, announceWinner, announceDraw, showCurrentPlayer };
})();

GameController.newGame();