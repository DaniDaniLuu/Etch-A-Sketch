function updateColor(event) {
    event.stopPropagation();
    if(colorClick){
       const colorWheel = document.querySelector('#color-picker');
       let colorValue = colorWheel.value;
       console.log(colorValue);
       this.style.backgroundColor = `${colorValue}`;

    }
    else if (rainbowClick){
        let redRandom = Math.floor(Math.random() * 256);
        let greenRandom = Math.floor(Math.random() * 256);
        let blueRandom = Math.floor(Math.random() * 256);
        this.style.backgroundColor = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;
    }
    else if (eraserClick){
        this.style.backgroundColor = '#FFFFFF';
    }
    return;
}

function clearBox() {
    const clearInner = document.querySelectorAll('.inner');
    clearInner.forEach(item => {
        item.style.backgroundColor = '#FFFFFF';
    })
}

// Function to change the slider bar size text 
function changeSizeText(gridSize) { 
    let sizeText = document.querySelector('#gridSize');
    sizeText.textContent = `${gridSize}x${gridSize}`
}

function updateGridDimensions(gridSize) {
    let dimension = 500/gridSize;
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
    addHover();
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
    addHover();
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
    addHover();
    updateGridDimensions(gridSize);
    changeSizeText(gridSize);
}

function addHover(){
    const etchBoxInner = document.querySelectorAll('.inner');
    etchBoxInner.forEach((item)=> {
    item.addEventListener('mouseover', updateColor)
    });
}


standardGrid();
const slider = document.querySelector('.sizePicker');
slider.addEventListener('input', updateGrid);

const color = document.querySelector('.color');
const rainbow = document.querySelector('.rainbow');
const eraser = document.querySelector('.eraser');
const clear = document.querySelector('.clear');

let colorClick = false;
let rainbowClick = false;
let eraserClick = false;

color.addEventListener('click', () => {
    colorClick = !colorClick;
    rainbowClick = false;
    eraserClick = false;
    color.classList.toggle('active');
    rainbow.classList.remove('active');
    eraser.classList.remove('active');
    clear.classList.remove('active');
})

rainbow.addEventListener('click', () => {
    colorClick = false;
    rainbowClick = !rainbowClick;
    eraserClick = false;
    rainbow.classList.toggle('active');
    color.classList.remove('active');
    eraser.classList.remove('active');
    clear.classList.remove('active');
})

eraser.addEventListener('click', () => {
    colorClick = false;
    rainbowClick = false;
    eraserClick = !eraserClick;
    eraser.classList.toggle('active');
    color.classList.remove('active');
    rainbow.classList.remove('active');
    clear.classList.remove('active');
})

clear.addEventListener('click', () => {
    clearBox();
    clear.classList.toggle('active');
    color.classList.remove('active');
    rainbow.classList.remove('active');
    eraser.classList.remove('active');
})