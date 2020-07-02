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
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
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

let toggleVal = true;
let toggle = (button) => {
    if(toggleVal === true) {
        button.innerHTML = 'X'
        console.log("it's clicked")
        toggleVal = false;
    }else if(toggleVal === false) {
        button.innerHTML = 'O'
        console.log("it's clicked")
        toggleVal = true;
    }
};

const ticTacToe = [[0,0,0],
                   [0,0,0], 
                   [0,0,0]]

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
    toggle(button)
};

boardButton1.addEventListener('click', function(event){
    clickOnBlock(boardButton1) 
    ticTacToe [0][0] = 1
    console.log(ticTacToe)
});
boardButton2.addEventListener('click', function(event){
    clickOnBlock(boardButton2) 
    ticTacToe [0][1] = 2
    console.log(ticTacToe)
});
boardButton3.addEventListener('click', function(event){
    clickOnBlock(boardButton3)
    ticTacToe [0][2] = 3
    console.log(ticTacToe) 
});
boardButton4.addEventListener('click', function(event){
    clickOnBlock(boardButton4)
    ticTacToe [1][0] = 4
    console.log(ticTacToe) 
});
boardButton5.addEventListener('click', function(event){
    clickOnBlock(boardButton5)
    ticTacToe [1][1] = 5
    console.log(ticTacToe) 
});
boardButton6.addEventListener('click', function(event){
    clickOnBlock(boardButton6)
    ticTacToe [1][2] = 6
    console.log(ticTacToe) 
});
boardButton7.addEventListener('click', function(event){
    clickOnBlock(boardButton7)
    ticTacToe [2][0] = 7
    console.log(ticTacToe) 
});
boardButton8.addEventListener('click', function(event){
    clickOnBlock(boardButton8)
    ticTacToe [2][1] = 8
    console.log(ticTacToe) 
});
boardButton9.addEventListener('click', function(event){
    clickOnBlock(boardButton9)
    ticTacToe [2][2] = 9
    console.log(ticTacToe) 
});

