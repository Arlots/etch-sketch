const container = document.querySelector('.container');

function createGrid (size) {

    let gridSquareHeightWidth = 960/size;

    for (let i = 0; i < (size * size); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('style', `height: ${gridSquareHeightWidth}px; width: ${gridSquareHeightWidth}px;`);
        gridSquare.addEventListener("mouseover", function() {
            gridSquare.setAttribute('style', `height: ${gridSquareHeightWidth}px; width: ${gridSquareHeightWidth}px; background-color: red;`)
        })
        gridSquare.setAttribute('class', 'gridSquare');
        container.appendChild(gridSquare);
    };

};

createGrid(20);

function userGrid () {
    size = prompt("Please enter a number from 1-100 to create a customer-sized square grid: ");

    if (size > 100) {
        size = prompt("I'm sorry but currently you may only use numbers up to 100. Please enter a number between 1-100: ")
    } else if (size == NaN) {
        size = prompt("You must enter a number from 1-100: ")
    }

    const gridContainer = document.querySelector(".container");

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }

    createGrid(size);
}

