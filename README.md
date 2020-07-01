# tictactoe_game

### PSEUDOCODE 

-create two players for a turn-based style game

-ask the first player to choose which symbol they want by clicking on the symbol
- *** if player 1 chooses 'x' player 2 gets 'o'***
- *** if player 1 chooses 'o' player 2 gets 'x'***

-player 2 goes first. they will click on which square they want with the symbol

-player 1 will go next. this will "loop" until there are 3 squares with the same symbol in a row

-once one of the players has successfully gotten 3 in a row, the round will end. 

-NEXT ROUND (same thing as first round) *3 rounds total*


IF NO ONE GETS 3 IN A ROW

-the game will restart that round and each player can place two symbols per turn








SOURCES

https://fonts.google.com






JS CODE THAT I MIGHT COME BACK TO 

let firstSymbol = document.querySelectorAll('.symbolX');
let firstBlock = document.querySelectorAll('.block1');

let draggedSymbol = null;

for(let i = 0; i < firstSymbol.length; i++) {
    let symbolX = firstSymbol[i];

    symbolX.addEventListener('dragstart', function(){
        draggedSymbol = this;
    });

    symbolX.addEventListener('dragend', function() {
        draggedSymbol = null;
    });
};

for(let count = 0; count < firstBlock.length; count++) 
{
    let parent = firstBlock[count];

    parent.addEventListener('dragover', function(event){
        event.preventDefault();
    });

    parent.addEventListener('dragenter', function(event) {
        event.preventDefault();
    });

    parent.addEventListener('drop', function() {
        this.append(draggedSymbol);
    });
};

let secondSymbol = document.querySelectorAll('.symbolO');
 firstBlock = document.querySelectorAll('.block1');

draggedSymbol = null;

for(let i = 0; i < secondSymbol.length; i++) {
    let symbolO = secondSymbol[i];

    symbolO.addEventListener('dragstart', function(){
        draggedSymbol = this;
    });

    symbolO.addEventListener('dragend', function() {
        draggedSymbol = null;
    });
};

for(count = 0; count < firstBlock.length; count++) 
{
    parent = firstBlock[count];

    parent.addEventListener('dragover', function(event){
        event.preventDefault();
    });

    parent.addEventListener('dragenter', function(event) {
        event.preventDefault();
    });

    parent.addEventListener('drop', function() {
        this.append(draggedSymbol);
    });
};



===============

function clickOnBlock() {

}

document.querySelectorAll('.block').forEach(block => block.addEventListener('click', clickOnBlock));

console.log(clickOnBlock())



notes:
 
-the actors can get turned into classes (player one and two)
-method and functions are interchangable (identify the actions)