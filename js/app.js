class TicTacToe {
    constructor() {
        
    }
}


class PlayerOne {
    constructor(symbol) {
        this.symbol = symbol
    }
};

let playerOne = new PlayerOne('X')

class PlayerTwo {
    constructor(symbol) {
        this.symbol = symbol
    }
};

let playerTwo = new PlayerTwo('O')

const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];


startOfGame()

function startOfGame() {
    let playerTurn = playerTwo;
    if(playerTurn !== winningArray) {
        console.log('player ones turn')
    }else {
        console.log('player won')
    }
};
