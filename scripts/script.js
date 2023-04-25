/* eslint-disable no-plusplus */
const GameBoard = (() => {
    const board = ['','','','X','','O','','',''];

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
            DisplayController.showResult();
        }
    };
    

    return { board, checkAvailableCell, checkForWin };
})();


const DisplayController = (() => {

    // create a cell (button) on the display
    const createCell = (boardItem, index) => {
        const displayCell = document.createElement('button');  
        const displayBoard = document.querySelector('#grid-container');

        displayBoard.append(displayCell);
        setCell(displayCell, 'cell', boardItem, index);
    };
    
    // set properties of the newly created cell
    const setCell = (displayCell, className, boardItem, index)=> {
        displayCell.className = className;
        displayCell.innerText = boardItem;
        displayCell.setAttribute('data', index);
        displayCell.addEventListener('click', () => GameController.placeMarker(index));
    };

    // clear current board and create new cell for each array item
    const updateDisplay = () => {
        const displayBoard = document.querySelector('#grid-container');
        let index = -1; // this way the counter starts at zero
        
        displayBoard.innerHTML = '';
        GameBoard.board.forEach(boardItem => {
            index++;
            createCell(boardItem, index)});
    };
    
    // show who is winner / tie
    const showResult = () => {
        const displayMsg = document.querySelector('#game-display')
        displayMsg.innerHTML = `<p>${GameController.getPlayerNamer()} WINS!</p>`;
        displayMsg.classList.add('winning-player');
    };

    return { updateDisplay, showResult};
})();


const Player = (name, marker) => ({ name, marker });
const player1 = Player('Player 1', 'X');
const player2 = Player('Player 2', 'O');


const GameController = (() => {
    let currentPlayer = player1;
    
    // startGame()
    // handlePlayerMove()

    const switchPlayers = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    
    const getPlayerNamer = () => currentPlayer.name;

    const getPlayerMarker = () => currentPlayer.marker;

     // if selected cell is empty, place a marker
     const placeMarker = (index) => {
        if (GameBoard.checkAvailableCell(index) === true) {
            GameBoard.board[index] = getPlayerMarker();
            GameBoard.checkForWin();
            switchPlayers();
        };
        
        DisplayController.updateDisplay();
    };

    return { currentPlayer, getPlayerNamer, placeMarker, switchPlayers };
})();

DisplayController.updateDisplay();