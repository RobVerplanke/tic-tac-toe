/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const GameBoard = (() => {
    let board = ['','','','','','','','',''];

    // checks wether selected cell is empty or not
    const checkAvailableCell = (index) => {
        if (board[index] !== '') {
            return false;
        } 
            return true;
    };

    const checkForWin = () => {
        if ((board[0] === board[1] && board[0] === board[2] && (!(board[0] === ''))) ||
            (board[3] === board[4] && board[3] === board[5] && (!(board[3] === ''))) ||
            (board[6] === board[7] && board[6] === board[8] && (!(board[6] === ''))) ||
            (board[0] === board[3] && board[0] === board[6] && (!(board[0] === ''))) ||
            (board[1] === board[4] && board[1] === board[7] && (!(board[1] === ''))) ||
            (board[2] === board[5] && board[2] === board[8] && (!(board[2] === ''))) ||
            (board[0] === board[4] && board[0] === board[8] && (!(board[0] === ''))) ||
            (board[2] === board[4] && board[2] === board[6] && (!(board[2] === '')))) {
                DisplayController.updateGrid();
                DisplayController.announceWinner();
                return true;
        } if(!(board.includes(''))) {
            DisplayController.announceTie();
            return true;
        } 
        GameController.switchPlayers();
        DisplayController.showCurrentPlayer();
        return false;
    };    

    return { board, checkAvailableCell, checkForWin };
})();


// ***** Player object *****

const Player = (name, marker) => ({ name, marker });
const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');


// ***** Game controller *****

const GameController = (() => {
    let currentPlayer = player1;

    const newGame = () =>{
        currentPlayer = player1;
        DisplayController.showCurrentPlayer();
        DisplayController.updateGrid('new');
    };

        const resetGame = () =>{
            // reset the game
    };


    const switchPlayers = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    
    const getPlayerName = () => currentPlayer.name;

    const getPlayerMarker = () => currentPlayer.marker;

    // if selected cell is empty, place a marker
    const placeMarker = (index) => {
        if(GameBoard.checkAvailableCell(index) === true){
            GameBoard.board[index] = getPlayerMarker();
            if(GameBoard.checkForWin() === false){
                DisplayController.updateGrid('new');
            }
        }
    };

    return { newGame, resetGame, getPlayerName, placeMarker, switchPlayers };
})();


// ***** Display controller *****

const DisplayController = (() => {
    const displayBoard = document.querySelector('#grid-container');
    const displayMessage = document.querySelector('#game-display');
    const resetButton = document.querySelector('#reset-button');

    // set event listener to reset button
    resetButton.addEventListener('click', GameController.resetGame);
    
    const showCurrentPlayer = () => {
        displayMessage.innerHTML = `<p>${GameController.getPlayerName()}'s turn`;
    };

    const announceWinner = () => {
        displayMessage.innerHTML = `<p>${GameController.getPlayerName()} wins!</p>`
    }

    const announceTie = () => {
        displayMessage.innerHTML = '<p>It\'s a tie!</p>'
    }
    
    // clear current board and create new cell for each array item
    const updateGrid = (gameStatus) => {
        let index = 0;
        displayBoard.innerHTML = '';
        GameBoard.board.forEach(boardItem => {
            createCell(boardItem, index, gameStatus)
            index++;
        });
    };

    // create a cell (button) on the display
    const createCell = (boardItem, index, status) => {
        const displayCell = document.createElement('button');  
        displayBoard.append(displayCell);
        setCell(displayCell, 'cell', boardItem, index, status);
    };
        
     // set properties of the newly created cell
    const setCell = (displayCell, className, boardItem, index, status)=> {
         const newCell = displayCell;
         newCell.className = className;
         newCell.innerText = boardItem;
         newCell.setAttribute('data', index);
         if(status === 'new'){
             newCell.addEventListener('click', () => GameController.placeMarker(index));
         }
     };
    
    return { updateGrid, announceWinner, announceTie, showCurrentPlayer };
})();

GameController.newGame();