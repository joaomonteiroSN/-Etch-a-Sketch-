const container = document.querySelector('.container');
const button = document.querySelector('.button-template');

let gridTemplate = 16;

let counter = 0;
let squareSize = (600/gridTemplate);

function createGrid() {

    while(counter < gridTemplate ** 2) {
        const square = document.createElement('div');
        square.classList.add('box-el');
        square.style.minWidth = `${squareSize}px`;
        container.appendChild(square);
        counter++;
    }
}

createGrid();

// -- prompt button --

button.addEventListener('click', () => {
    const playerChoose = parseInt(prompt('Choose the grid template.'));
    
    container.innerHTML = "";
    
    gridTemplate = playerChoose;
    squareSize = (600/gridTemplate);
    
    createGrid();
    console.log(gridTemplate);
    console.log(squareSize);
});

// -- Hover effect --

let square = document.querySelectorAll('.box-el');

square.forEach(div => div.addEventListener('mouseover', () => {
    div.style.background = '#000000'
}));
