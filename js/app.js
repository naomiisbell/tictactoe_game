// global variables
let player1_win = 0;
let player2_win = 0;
let drawVal = 0;
let gameEnd = false;

// this function contains the entire game
let ticTacToeGame = () => {

    // create a class of the actors in the game 
    class Player {
        constructor(symbol) {
            this.symbol = symbol
        }
    };

    // player one and two symbols defined here
    let playerOne = new Player("X");
    let playerTwo = new Player("O");

    let ticTacToeArrVal = 1;
    // the 2d array is set to equal all 2's which in the code is represented by empty buttons 
    // the array values are what we wanna change for each letter to track wins

    //takes two arrays
    // tracking the elements in the array to see if there is a winValArr
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

    let winValArr = [1, 1, 1] //for X
    let winValArr_2 = [0, 0, 0] // for O

    // SECTION
    //checks for a win in a row
    let rowCheck = () => {

        //!player 1
        for (let i = 0; i < ticTacToe.length; i++) {
            //for loop that iterates through the length of the ticTacToe array checking for the winValArr 
            if (compArr(ticTacToe[i], winValArr)) {
                console.log("WIN")
                alert("player 1 WINS")
                gameEnd = true; //if the winValArr is the same the end of the game is true
                player1_win++;
                break;
            }
        }
        //!player 2
        for (let i = 0; i < ticTacToe.length; i++) {
            if (compArr(ticTacToe[i], winValArr_2)) {
                console.log("WIN")
                alert("player 2 WINS")
                gameEnd = true;
                player2_win++;
                break;
            }
        }
    };

    //checks for win in a column
    let colCheck = () => {

        //!player 1
        for (let i = 0; i < ticTacToe.length; i++) {
            // these square brackets are used to recognize each block on the board 
            // the TTT board is similar to a graph
            testArr = [ticTacToe[0][i], ticTacToe[1][i], ticTacToe[2][i]]
            if (compArr(testArr, winValArr)) {
                console.log("WIN")
                alert("player 1 WINS")
                gameEnd = true;
                player1_win++;
                break;
            }
        }
        //!player 2
        for (let i = 0; i < ticTacToe.length; i++) {
            testArr = [ticTacToe[0][i], ticTacToe[1][i], ticTacToe[2][i]]
            if (compArr(testArr, winValArr_2)) {
                console.log("WIN")
                alert("player 2 WINS")
                gameEnd = true;
                player2_win++;
                break;
            }
        }
    };
    //- !SECTION

    // checks for a win diagonally
    let diagCheck = () => {

        //!left to right diagonal
        if (compArr([ticTacToe[0][0], ticTacToe[1][1], ticTacToe[2][2]], winValArr)) {
            console.log("WIN")
            alert("player 1 WINS")
            gameEnd = true;
            player1_win++;


        }
        //!right to left diagonal
        if (compArr([ticTacToe[2][0], ticTacToe[1][1], ticTacToe[0][2]], winValArr)) {
            console.log("WIN")
            alert("player 1 WINS")
            gameEnd = true;
            player1_win++;

        }
        //!left to right diagonal
        if (compArr([ticTacToe[0][0], ticTacToe[1][1], ticTacToe[2][2]], winValArr_2)) {
            console.log("WIN")
            alert("player 2 WINS")
            gameEnd = true;
            player2_win++;


        }
        //!right to left diagonal
        if (compArr([ticTacToe[2][0], ticTacToe[1][1], ticTacToe[0][2]], winValArr_2)) {
            console.log("WIN")
            alert("player 2 WINS")
            gameEnd = true;
            player2_win++;

        }
    }

    // checks for a draw
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
        // if the entire board is filled (9) and does not pass one of the win checks then it is a draw
        if (fillVal == 9) {
            console.log("Draw")
            alert("Draw")
            gameEnd = true;
            drawVal++;

        }

    }

    // this functions switches turns between the two symbols
    let toggleVal = false;
    let toggle = (button) => {

        //! Player 1
        if (toggleVal === false) {
            button.innerHTML = `<span class="player1">${playerOne.symbol}</span>` //* Unique symbols
            console.log("it's clicked")
            ticTacToeArrVal = 1; // 1 = X
            toggleVal = true;

            //! player 2        
            //this will change the values in every button in the array which will determine the win
        } else if (toggleVal === true) {
            button.innerHTML = `<span class="player2">${playerTwo.symbol}</span>`
            console.log("it's clicked")
            ticTacToeArrVal = 0; // 0 = O
            toggleVal = false;
        }
    };

    // an array within an array
    let ticTacToe = [
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
    let playAgainButton = document.getElementById('playAgain')

    // function in order to be able to click on the button 
    let clickOnBlock = (button) => {
        //calls the toggle function which switches between players
        toggle(button)

    };
    //function that will clear the board if the players want to play again
    let clearBlock = (button) => {
        button.innerHTML = ' '
    };

    let winChecks = () => {
        rowCheck()
        colCheck()
        diagCheck()
        boardCheck()
    }

    boardButton1.addEventListener('click', function (event) {
        // if the button equals 2 which is the original array it cannot be clicked
        // if the gameEnd is not true it cannot be clicked after it has already been clicked
        if (ticTacToe[0][0] == 2 && gameEnd !== true) {
            clickOnBlock(boardButton1)
            // when it is clicked that block will change it's value depending on who's turn it is
            ticTacToe[0][0] = ticTacToeArrVal
            winChecks()
            console.log(ticTacToe)
        }

    });
    boardButton2.addEventListener('click', function (event) {
        if (ticTacToe[0][1] == 2 && gameEnd !== true)
            clickOnBlock(boardButton2)
        ticTacToe[0][1] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    boardButton3.addEventListener('click', function (event) {
        if (ticTacToe[0][2] == 2 && gameEnd !== true)
            clickOnBlock(boardButton3)
        ticTacToe[0][2] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    boardButton4.addEventListener('click', function (event) {
        if (ticTacToe[1][0] == 2 && gameEnd !== true)
            clickOnBlock(boardButton4)
        ticTacToe[1][0] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    boardButton5.addEventListener('click', function (event) {
        if (ticTacToe[1][1] == 2 && gameEnd !== true)
            clickOnBlock(boardButton5)
        ticTacToe[1][1] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    boardButton6.addEventListener('click', function (event) {
        if (ticTacToe[1][2] == 2 && gameEnd !== true)
            clickOnBlock(boardButton6)
        ticTacToe[1][2] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    boardButton7.addEventListener('click', function (event) {
        if (ticTacToe[2][0] == 2 && gameEnd !== true)
            clickOnBlock(boardButton7)
        ticTacToe[2][0] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    boardButton8.addEventListener('click', function (event) {
        if (ticTacToe[2][1] == 2 && gameEnd !== true)
            clickOnBlock(boardButton8)
        ticTacToe[2][1] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    boardButton9.addEventListener('click', function (event) {
        if (ticTacToe[2][2] == 2 && gameEnd !== true)
            clickOnBlock(boardButton9)
        ticTacToe[2][2] = ticTacToeArrVal
        winChecks()
        console.log(ticTacToe)
    });
    playAgainButton.addEventListener('click', function (event) {
        ticTacToe = [
            [2, 2, 2],
            [2, 2, 2],
            [2, 2, 2]
        ];
        clearBlock(boardButton1)
        clearBlock(boardButton2)
        clearBlock(boardButton3)
        clearBlock(boardButton4)
        clearBlock(boardButton5)
        clearBlock(boardButton6)
        clearBlock(boardButton7)
        clearBlock(boardButton8)
        clearBlock(boardButton9)
        gameEnd = false; // if the gameEnd is false they can actually play again 


        // if (player1_win > 0) {
        //     alert(player1_win)
        // }
        // if (player2_win > 0) {
        //     alert(player2_win)
        // }
        // if (drawVal > 0) {
        //     alert(drawVal)
        // }

    });
    //- !SECTION


};

ticTacToeGame()



// need to return functionality from my game
// check and see if i'm even playing my game while it;s running