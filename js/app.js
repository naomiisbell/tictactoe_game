class TicTacToe {
    constructor() {
        
    }
};


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


// startOfGame()

let startOfGame = () => {
    let playerTurn = playerTwo;
    if(playerTurn !== winningArray) {
        console.log('player ones turn')
    }else {
        console.log('player won')
    }
};

let boardButton1 = document.querySelector('.btn-one')
let boardButton2 = document.querySelector('.btn-two')
let boardButton3 = document.querySelector('.btn-three')
let boardButton4 = document.querySelector('.btn-four')
let boardButton5 = document.querySelector('.btn-five')
let boardButton6 = document.querySelector('.btn-six')
let boardButton7 = document.querySelector('.btn-seven')
let boardButton8 = document.querySelector('.btn-eight')
let boardButton9 = document.querySelector('.btn-nine')

let clickOnBlock = (button) => {
    button.innerHTML = 'X'
    console.log("it's clicked")
}

boardButton1.addEventListener('click', function(event){
    clickOnBlock(boardButton1) 
});
boardButton2.addEventListener('click', function(event){
    clickOnBlock(boardButton2) 
});
boardButton3.addEventListener('click', function(event){
    clickOnBlock(boardButton3) 
});
boardButton4.addEventListener('click', function(event){
    clickOnBlock(boardButton4) 
});
boardButton5.addEventListener('click', function(event){
    clickOnBlock(boardButton5) 
});
boardButton6.addEventListener('click', function(event){
    clickOnBlock(boardButton6) 
});
boardButton7.addEventListener('click', function(event){
    clickOnBlock(boardButton7) 
});
boardButton8.addEventListener('click', function(event){
    clickOnBlock(boardButton8) 
});
boardButton9.addEventListener('click', function(event){
    clickOnBlock(boardButton9) 
});



