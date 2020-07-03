class Player {
    constructor(symbol) {
        this.symbol = symbol
    }
};

let playerOne = new Player("X");
let playerTwo = new Player("O");

let ticTacToeArrVal = 0;

const winningDiaArray = [
    []
];
//quick comment

// SECTION
let rowCheck = () => {

    //!player 1
    for (let i = 0; i < ticTacToe.length; i++) {
        if (ticTacToe[i] == [1, 1, 1]) {
            console.log("WIN")
        }
    }
    //!player 2
    for (let i = 0; i < ticTacToe.length; i++) {
        if (ticTacToe[i] == [0, 0, 0]) {
            console.log("WIN")
        }
    }
};


let colCheck = () => {

    //!player 1
    for (let i = 0; i < ticTacToe.length; i++) {
        testArr = [ticTacToe[0][i],ticTacToe[1][i],ticTacToe[2][i]]
        if ( testArr[i] == [1, 1, 1]) {
            console.log("WIN")
    }
}
    //!player 2
    for (let i = 0; i < ticTacToe.length; i++) {
        testArr = [ticTacToe[0][i],ticTacToe[1][i],ticTacToe[2][i]]
        if ( testArr[i] == [0, 0, 0]) {
            console.log("WIN")
        }
    }
};
//- !SECTION

let diagCheck = () => {

    //!left to right diagonal
    if([ticTacToe[0][0],ticTacToe[1][1],ticTacToe[2][2]] == [1,1,1]) { 
        console.log("WIN")

    }
        //!right to left diagonal
    if([ticTacToe[2][0],ticTacToe[1][1],ticTacToe[0][2]] == [1,1,1]) { 
        console.log("WIN")

    }
    //!left to right diagonal
    if([ticTacToe[0][0],ticTacToe[1][1],ticTacToe[2][2]] == [0,0,0]) { 
        console.log("WIN")

    }
        //!right to left diagonal
    if([ticTacToe[2][0],ticTacToe[1][1],ticTacToe[0][2]] == [0,0,0]) { 
        console.log("WIN")

    }
}

let startOfGame = () => {
    let playerTurn = playerTwo;
    if (playerTurn !== winningArray) {
        console.log('player ones turn')
    } else {
        console.log('player won')
    }
};

let toggleVal = true;
let toggle = (button) => {

    //! Player 1
    if (toggleVal === true) {
        button.innerHTML = playerOne.symbol //* Unique symbols
        console.log("it's clicked")
        ticTacToeArrVal = 1;
        toggleVal = false;

        //! player 2        
    } else if (toggleVal === false) {
        button.innerHTML = playerTwo.symbol
        console.log("it's clicked")
        ticTacToeArrVal = 0;
        toggleVal = true;
    }
};

const ticTacToe = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

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

boardButton1.addEventListener('click', function (event) {
    clickOnBlock(boardButton1)
    ticTacToe[0][0] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton2.addEventListener('click', function (event) {
    clickOnBlock(boardButton2)
    ticTacToe[0][1] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton3.addEventListener('click', function (event) {
    clickOnBlock(boardButton3)
    ticTacToe[0][2] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton4.addEventListener('click', function (event) {
    clickOnBlock(boardButton4)
    ticTacToe[1][0] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton5.addEventListener('click', function (event) {
    clickOnBlock(boardButton5)
    ticTacToe[1][1] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton6.addEventListener('click', function (event) {
    clickOnBlock(boardButton6)
    ticTacToe[1][2] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton7.addEventListener('click', function (event) {
    clickOnBlock(boardButton7)
    ticTacToe[2][0] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton8.addEventListener('click', function (event) {
    clickOnBlock(boardButton8)
    ticTacToe[2][1] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});
boardButton9.addEventListener('click', function (event) {
    clickOnBlock(boardButton9)
    ticTacToe[2][2] = ticTacToeArrVal
    console.log(ticTacToe)
    rowCheck()
    colCheck()
    diagCheck()
});