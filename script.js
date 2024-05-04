const container = document.querySelector('.container');

function createGrid (size) {


    if (size > 100) {
        size = prompt("I'm sorry. You cannot create a grid larger than 100x100. Please enter another number: ")
    }

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

createGrid(prompt("Enter a single number to be squared to create a grid: "));
