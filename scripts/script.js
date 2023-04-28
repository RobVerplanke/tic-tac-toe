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
        if ((board[0] === board[1] && board[0] === board[2] && (!(board[0] === ''))) ||
            (board[3] === board[4] && board[3] === board[5] && (!(board[3] === ''))) ||
            (board[6] === board[7] && board[6] === board[8] && (!(board[6] === ''))) ||
            (board[0] === board[3] && board[0] === board[6] && (!(board[0] === ''))) ||
            (board[1] === board[4] && board[1] === board[7] && (!(board[1] === ''))) ||
            (board[2] === board[5] && board[2] === board[8] && (!(board[2] === ''))) ||
            (board[0] === board[4] && board[0] === board[8] && (!(board[0] === ''))) ||
            (board[2] === board[4] && board[2] === board[6] && (!(board[2] === '')))) {
                return true;
                // Game over
        }

        // check for tie
        if (!(board.includes(''))) {
            return true;
            // Game over
        }
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
        DisplayController.updateGrid();
        DisplayController.updateMsgTurn();
    };

    const gameOver = () => {
        // "freeze" the game so players can't place markers anymore
        // announce winner or tie
    }

    const continueGame = () => {
        switchPlayers();
        DisplayController.updateGrid();
        DisplayController.updateMsgTurn();
    }

    const switchPlayers = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    
    const getPlayerName = () => currentPlayer.name;

    const getPlayerMarker = () => currentPlayer.marker;

    // if selected cell is empty, place a marker
    const placeMarker = (index) => {
        if (GameBoard.checkAvailableCell(index) === true) {
            // if there is no winner or no a tie, continue the game
            if(GameBoard.checkForWin() === false){
                GameBoard.board[index] = getPlayerMarker();
                continueGame();
            } else{
                
            }
        };
    };

    return { newGame, gameOver, getPlayerName, placeMarker, switchPlayers };
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

    // show who's turn it is
    const updateMsgTurn = () => {
        displayMessage.innerHTML = `<p>${GameController.getPlayerName()}'s turn</p>`;
    };

    // show who is the winner or else that the game ended in a tie
    const displayResult = () => {
        displayMessage.innerHTML = `<p>${GameController.getPlayerName()} is the winner!</p>`;
        console.log(`${GameController.getPlayerName()} is the winner!`);
    }

    // clear current board and create new cell for each array item
    const updateGrid = () => {
        let index = -1; // this way the counter starts at zero
        displayBoard.innerHTML = '';
        GameBoard.board.forEach(boardItem => {
            index++;
            createCell(boardItem, index)
        });
    };
    
    return { updateMsgTurn, displayResult, updateGrid};
})();

GameController.newGame();