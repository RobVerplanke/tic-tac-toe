const Gameboard = (() => {
    const board = [[1,2,3],[4,5,6],[7,8,9]];
    const printBoard = () => {
        console.log(board);
    }
    return {printBoard};
})();

const PlayerHuman = (name, marker) => {
    name;
    marker;
};

const PlayerComputer = (marker) => {
    marker;
};