let numberOfRows = 16;
let pixelsPerRow = 16;
const resetButton = document.querySelector('#grid-reset');
const grid = document.querySelector('#grid');
const div = document.createElement('div');
const untouchedPixel = document.querySelector('.untouched-pixel');
const rowInput = document.querySelector('#row-input');
const columnInput = document.querySelector('#column-input');

generateGrid(numberOfRows, pixelsPerRow);

resetButton.addEventListener('click', function(){
    updateRowCount();
    updateColumnCount();
    clearGrid();
    generateGrid(numberofRows, pixelsPerRow);
});

grid.addEventListener('mouseover', function(e){
    if(e.target.matches('.untouched-pixel')){
        e.target.classList.add('touched-pixel');
    }
})

function updateRowCount(){
    numberofRows = rowInput.value;
    return numberofRows;
}

function updateColumnCount(){
    pixelsPerRow = columnInput.value;
    return pixelsPerRow;
}

function clearGrid() {
    grid.innerHTML = '';
}

function generateGrid(rows, columns){
    for(let i = 0; i < rows; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        grid.appendChild(gridRow);
        for(let j = 0; j < columns; j++){
            const pixel = document.createElement('div');
            pixel.classList.add('untouched-pixel');
            gridRow.appendChild(pixel);
        }
    }
}

