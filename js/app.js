let ticTacToeGame = () => {

    class Player {
        constructor(symbol) {
            this.symbol = symbol
        }
    };

    let playerOne = new Player("X");
    let playerTwo = new Player("O");

    let ticTacToeArrVal = 1;


    //quick comment

    //takes two arrays
    let compArr = (array_1, array_2) => {
        if (array_1 === array_2) {
            return true; //they are equal to each other
        }
        if (array_1.length !== array_2.length) {
            return false; // different lengths
        }
        if (array_1 == null || array_2 == null) {
            return false;
        }
        // comparing each array element 
        // if it's not equal to the respective elements 
        //looping through the elements
        for (var i = 0; i <= array_1.length - 1; ++i) {
            if (array_1[i] !== array_2[i]) {
                return false;
            }
        }
        return true; // if all statements are false the function will return true
    };

    let winValArr = [1, 1, 1]
    let winValArr_2 = [0, 0, 0]

    // SECTION
    let rowCheck = () => {

        //!player 1
        for (let i = 0; i < ticTacToe.length; i++) {
            if (compArr(ticTacToe[i], winValArr)) {
                console.log("WIN")
                return "WIN"
            }
        }
        //!player 2
        for (let i = 0; i < ticTacToe.length; i++) {
            if (compArr(ticTacToe[i], winValArr_2)) {
                console.log("WIN")
                return "WIN"
            }
        }
    };


    let colCheck = () => {

        //!player 1
        for (let i = 0; i < ticTacToe.length; i++) {
            testArr = [ticTacToe[0][i], ticTacToe[1][i], ticTacToe[2][i]]
            if (compArr(testArr, winValArr)) {
                console.log("WIN")
                return "WIN"
            }
        }
        //!player 2
        for (let i = 0; i < ticTacToe.length; i++) {
            testArr = [ticTacToe[0][i], ticTacToe[1][i], ticTacToe[2][i]]
            if (compArr(testArr, winValArr_2)) {
                console.log("WIN")
                return "WIN"
            }
        }
    };
    //- !SECTION

    let diagCheck = () => {

        //!left to right diagonal
        if (compArr([ticTacToe[0][0], ticTacToe[1][1], ticTacToe[2][2]], winValArr)) {
            console.log("WIN")
            return "WIN"

        }
        //!right to left diagonal
        if (compArr([ticTacToe[2][0], ticTacToe[1][1], ticTacToe[0][2]], winValArr)) {
            console.log("WIN")
            return "WIN"
        }
        //!left to right diagonal
        if (compArr([ticTacToe[0][0], ticTacToe[1][1], ticTacToe[2][2]], winValArr_2)) {
            console.log("WIN")
            return "WIN"

        }
        //!right to left diagonal
        if (compArr([ticTacToe[2][0], ticTacToe[1][1], ticTacToe[0][2]], winValArr_2)) {
            console.log("WIN")
            return "WIN"
        }
    }

    let boardCheck = () => {
        let fillVal = 0;
        // loop the outer array
        for (let i = 0; i < ticTacToe.length; i++) {
            // get the size of the inner array
            var innerArrayLength = ticTacToe[i].length;
            // loop the inner array
            for (let j = 0; j < innerArrayLength; j++) {
                if (ticTacToe[i][j] !== 2) {
                    fillVal++;
                }
            }
        }

        if (fillVal == 9) {
            return "Draw"
        }

    }

    let toggleVal = false;
    let toggle = (button) => {

        //! Player 1
        if (toggleVal === false) {
            button.innerHTML = playerOne.symbol //* Unique symbols
            console.log("it's clicked")
            ticTacToeArrVal = 1;
            toggleVal = true;

            //! player 2        
        } else if (toggleVal === true) {
            //button.innerHTML = playerTwo.symbol
            button.innerHTML = `<span class="player2">${playerTwo.symbol}</span>`
            console.log("it's clicked")
            ticTacToeArrVal = 0;
            toggleVal = false;
        }
    };

    const ticTacToe = [
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2]
    ];

    // SECTION
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
    let winChecks = () => {
        rowCheck()
        colCheck()
        diagCheck()
        boardCheck()
    }

    boardButton1.addEventListener('click', function (event) {
        if (ticTacToe[0][0] == 2) {
            clickOnBlock(boardButton1)
            ticTacToe[0][0] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }

    });
    boardButton2.addEventListener('click', function (event) {
        if (ticTacToe[0][1] == 2) {
            clickOnBlock(boardButton2)
            ticTacToe[0][1] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    boardButton3.addEventListener('click', function (event) {
        if (ticTacToe[0][2] == 2) {
            clickOnBlock(boardButton3)
            ticTacToe[0][2] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    boardButton4.addEventListener('click', function (event) {
        if (ticTacToe[1][0] == 2) {
            clickOnBlock(boardButton4)
            ticTacToe[1][0] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    boardButton5.addEventListener('click', function (event) {
        if (ticTacToe[1][1] == 2) {
            clickOnBlock(boardButton5)
            ticTacToe[1][1] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    boardButton6.addEventListener('click', function (event) {
        if (ticTacToe[1][2] == 2) {
            clickOnBlock(boardButton6)
            ticTacToe[1][2] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    boardButton7.addEventListener('click', function (event) {
        if (ticTacToe[2][0] == 2) {
            clickOnBlock(boardButton7)
            ticTacToe[2][0] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    boardButton8.addEventListener('click', function (event) {
        if (ticTacToe[2][1] == 2) {
            clickOnBlock(boardButton8)
            ticTacToe[2][1] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    boardButton9.addEventListener('click', function (event) {
        if (ticTacToe[2][2] == 2) {
            clickOnBlock(boardButton9)
            ticTacToe[2][2] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }
    });
    //- !SECTION

};

let drawVal = 0;
let rounds = 3; // can prompt user for number of rounds
let player1_win = 0;
let player2_win = 0;

let gameOutcome = (num) => {

        if (num == 1) {

            console.log("player 2 WINS")

        }

        if (num == 2) {

            console.log("player 1 WINS")

        }

        if (num == 0) {

            console.log("Draw")

        }
    };

    for (let i = 0; i < 3; i++){
        gameOutcome(ticTacToeGame())
        let playAgain = (answer) => {
            prompt("Do you want to play again?")
            if(answer == "yes"){
            ticTacToeGame()
            }
        }    // if user says yes no change, but if user types no use "break" to exit the loop 
   };