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

https://www.javascripttutorial.net/javascript-multidimensional-array/

https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript

https://www.geeksforgeeks.org/how-to-create-two-dimensional-array-in-javascript/

https://www.w3schools.com/jsref/prop_html_innerhtml.asp

https://www.w3schools.com/tags/tag_b.asp

https://www.w3schools.com/jsref/event_onclick.asp

https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

https://colorhunt.co/palette/192115

https://www.youtube.com/watch?v=Y-GkMjUZsmM&t=2197s (i used this one mostly for the play again button but couldn't get it to work)


===============

function clickOnBlock() {

}

document.querySelectorAll('.block').forEach(block => block.addEventListener('click', clickOnBlock));

console.log(clickOnBlock())



notes:
 
-the actors can get turned into classes (player one and two)
-method and functions (identify the actions)


what wiley wants me to change 
-way to track rounds 
-and reset score 