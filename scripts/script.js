const GameBoard = (() => {
    const board = [['X','O','X'],['O','X','X'],['O','X','O']];
    return {board};
})();

const DisplayController = (() => {
    const displayContainer = document.getElementById('game-container');
    displayContainer.innerHTML = GameBoard.board;
})();


const PlayerHuman = (name, marker) => {
    const playerName = name;
    const playerMarker = marker;
};

const PlayerComputer = (marker) => {
    const computerName = 'Computer';
    const computerMarker = marker; // opposite of human player's marker
};
