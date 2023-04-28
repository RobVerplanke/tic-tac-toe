/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
const GameBoard = (() => {
    const board = ['','','','','','','','',''];

    // checks wether selected cell is empty or not
    const checkAvailableCell = (index) => {
        if (board[index] !== '') {
            console.log('already taken');
            return false;
        }
        return true;
    };

    const checkForWin = () => {
        if( (board[0] === board[1] && board[0] === board[2] && (!(board[0] === ''))) ||
            (board[3] === board[4] && board[3] === board[5] && (!(board[3] === ''))) ||
            (board[6] === board[7] && board[6] === board[8] && (!(board[6] === ''))) ||
            (board[0] === board[3] && board[0] === board[6] && (!(board[0] === ''))) ||
            (board[1] === board[4] && board[1] === board[7] && (!(board[1] === ''))) ||
            (board[2] === board[5] && board[2] === board[8] && (!(board[2] === ''))) ||
            (board[0] === board[4] && board[0] === board[8] && (!(board[0] === ''))) ||
            (board[2] === board[4] && board[2] === board[6] && (!(board[2] === ''))) )
        {  
            console.log(`${GameController.getPlayerName()} is the winner!`);
            return;
        }

        if(!(board.includes(''))){
            console.log('It\'s a tie!');
        }        
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
        DisplayController.updateGrid();
        DisplayController.updateTurn();
    };

    const switchPlayers = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        // DisplayController.updateMessage();
    };
    
    const getPlayerName = () => currentPlayer.name;

    const getPlayerMarker = () => currentPlayer.marker;

    // if selected cell is empty, place a marker
    const placeMarker = (index) => {
        if (GameBoard.checkAvailableCell(index) === true) {
            GameBoard.board[index] = getPlayerMarker();
            GameBoard.checkForWin();
            switchPlayers();
            DisplayController.updateGrid();
            DisplayController.updateTurn();
        };
    };

    return { currentPlayer, newGame, getPlayerName, placeMarker, switchPlayers };
})();


// ***** Display controller *****

const DisplayController = (() => {
    const displayBoard = document.querySelector('#grid-container');
    const displayMessage = document.querySelector('#game-display');

    
    // set properties of the newly created cell
    const setCell = (displayCell, className, boardItem, index)=> {
        const newCell = displayCell;
        newCell.className = className;
        newCell.innerText = boardItem;
        newCell.setAttribute('data', index);
        newCell.addEventListener('click', () => GameController.placeMarker(index));
    };

    // create a cell (button) on the display
    const createCell = (boardItem, index) => {
        const displayCell = document.createElement('button');  
        displayBoard.append(displayCell);
        setCell(displayCell, 'cell', boardItem, index);
    };

    // Show who's turn it is
    const updateTurn = () => {
        displayMessage.innerHTML = `<p>${GameController.getPlayerName()}'s turn</p>`;
    };

    // clear current board and create new cell for each array item
    const updateGrid = () => {
        let index = -1; // this way the counter starts at zero
        displayBoard.innerHTML = '';
        GameBoard.board.forEach(boardItem => {
            index++;
            createCell(boardItem, index)
        });
    };
    
    return { updateTurn, updateGrid};
})();

GameController.newGame();