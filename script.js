const container = document.querySelector('.container');

function createGrid (size) {
    let gridSquareHeightWidth = 960/size;
    for (let i = 0; i < (size * size); i++) {
        const gridSquare = document.createElement('div');
        gridSquare.setAttribute('style', `height: ${gridSquareHeightWidth}px; width: ${gridSquareHeightWidth}px;`)
        container.appendChild(gridSquare)
        gridSquare.classList.add('gridSquare')
    };
};

createGrid(16);