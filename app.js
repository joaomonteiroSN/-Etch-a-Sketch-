const container = document.querySelector('.container');
const button = document.querySelector('.button-template');
const buttonErase = document.querySelector('.button-erase');

let gridTemplate = 16;

let counter = 0;
let squareSize = (600 / gridTemplate);

function createGrid() {
    counter = 0;
    while (counter < gridTemplate ** 2) {
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
    let playerChoose = parseInt(prompt('Choose the grid template between 1-100.'));

    while(playerChoose < 1 || playerChoose > 100) {
        playerChoose = parseInt(prompt('Please choose a valid format for the grid(1-100).'));
    };

    container.innerHTML = "";

    gridTemplate = playerChoose;
    squareSize = (600 / gridTemplate);

    createGrid();
    hoverEffect();
});

// -- Hover effect --

let square = document.querySelectorAll('.box-el');

const hoverEffect = () => {
    square.forEach(div => div.addEventListener('mouseover', () => {
        div.style.background = '#000000';
    }));
}

hoverEffect();

buttonErase.addEventListener('click', () => {
    square.forEach((div) => div.style.background = '#ffffff');
});