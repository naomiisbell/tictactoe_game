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
