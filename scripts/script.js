/* eslint-disable no-plusplus */

const gameController = () => {

    const Player = (name, marker) => {
        const playerName = name;
        const playerMarker = marker;
        
        return { playerMarker }
    };

    const player1 = Player('Player 1', 'X');
    const player2 = Player('Player 2', 'O');
    
    let activePlayer = player1;
    
    const getActivePlayerName = () => activePlayer.playerName;
    const placeActivePlayerMarker = () => activePlayer.playerMarker;


    const switchPlayer = () => {
        activePlayer = activePlayer === player1 ? player2 : player1;
    };

    return { switchPlayer, placeActivePlayerMarker };

 };

const gameControl = gameController();

// create a gameboard object and let it return a display function
function GameBoard() {
    const rows = 3;
    const cols = 3;
    const board = [];

    // create a empty 2d grid
    const createGridArray = () => {
        for(let i = 0; i < rows; i++){
        board[i] = [];
            for(let j = 0; j < cols; j++){
                board[i][j] = '';
            }
        }
    };

    // return the corresponding array item
    const getBoardItem = (i, j) => board[i][j];

     // check if there are 3 markers in a row
    const checkForWin = () => {
        console.log(board);
        // if( (board[0][0] === board[1][0] && board[0][0] === board[2][0]) ||
        //     (board[0][1] === board[1][1] && board[0][1] === board[2][1]) ||
        //     (board[0][2] === board[1][2] && board[0][2] === board[2][2]) ||
        //     (board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
        //     (board[1][0] === board[1][1] && board[1][0] === board[1][2]) ||
        //     (board[2][0] === board[2][1] && board[2][0] === board[2][2]) ||
        //     (board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
        //     (board[0][2] === board[1][1] && board[0][2] === board[2][0]))
        // {
        //     console.log('Winner!');
        // }
    };
    
    // when a player clicks on a grid cell
    const selectCell = (e) => {
        const selectedCell = e.target;

        if(selectedCell.innerHTML === ''){ // if there is no marker in the selected cell
            selectedCell.innerHTML = gameControl.placeActivePlayerMarker(); // place a marker
            checkForWin(); // check if there are 3 markers in a row
            gameControl.switchPlayer(); // if not, switch active player and continue
        } else {
            console.log('not empty');
        }

        // function update array with new marker
    };

    // create a single cell with corresponding array value and add a eventlistener to it
    const createCell = (i, j) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = getBoardItem(i, j);
        cell.addEventListener('click', e => selectCell(e));
        return cell;
    };

    // create a 2d grid on the display
    const createGridDisplay = () => {
        const cellContainer = document.getElementById('cell-container');

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < cols; j++){
                cellContainer.append(createCell(i, j));
            }
        }
    };

      
    createGridArray();

    return { createGridDisplay };
}

const newGame = GameBoard();
newGame.createGridDisplay();


// sign in form
// function getForm(() {
// 
// })()