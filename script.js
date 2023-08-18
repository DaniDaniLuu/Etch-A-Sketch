function updateColor(event) {
    if(colorMode){

    }
    else if (rainbowMode){

    }
    else if (eraser){

    }
    return;
}

function randomColor() {

}

function eraserMode() {

}

function clearBox() {

}

// Function to change the slider bar size text 
function changeSizeText(gridSize) { 
    let sizeText = document.querySelector('#gridSize');
    sizeText.textContent = `${gridSize}x${gridSize}`
}

function updateGridDimensions(gridSize) {
    let dimension = 500/gridSize;
    console.log(dimension);
    const outerArray = document.querySelectorAll('.outer');
    const innerArray = document.querySelectorAll('.inner');
    outerArray.forEach((item) => {
        item.style.display = 'flex';
    })

    innerArray.forEach((item) => {
        item.style.cssText = `height:${dimension}px; width:${dimension}px;`
    })
}

// This function is meant to update the size of the grid to the appropriate Num x Num size. After updating the size calls changeSizeText.
function updateGrid(event) {
    let gridContainer = document.querySelector('.etchBox')
    let gridSize = event.currentTarget.value;
    gridContainer.innerHTML = '';
    for(let i = 0; i < gridSize; i++) {
            let outerGrid = document.createElement('div');
            outerGrid.classList.add('outer');
            gridContainer.appendChild(outerGrid);
            for (let j = 0; j < gridSize; j++) {
                let innerGrid = document.createElement('div');
                innerGrid.classList.add('inner');
                outerGrid.appendChild(innerGrid);
            }
    }
    updateGridDimensions(gridSize);
    changeSizeText(gridSize);
}

function standardGrid(){
    let gridContainer = document.querySelector('.etchBox')
    let gridSize = 16;
    gridContainer.innerHTML = '';
    for(let i = 0; i < gridSize; i++) {
            let outerGrid = document.createElement('div');
            outerGrid.classList.add('outer');
            gridContainer.appendChild(outerGrid);
            for (let j = 0; j < gridSize; j++) {
                let innerGrid = document.createElement('div');
                innerGrid.classList.add('inner');
                outerGrid.appendChild(innerGrid);
            }
    }
    updateGridDimensions(gridSize);
    changeSizeText(gridSize);
}


standardGrid();

const etchBox = document.querySelector('.etchBox');
etchBox.addEventListener('hover', updateColor)

const slider = document.querySelector('.sizePicker');
slider.addEventListener('input', updateGrid);

const color = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');

color.addEventListener('click',)