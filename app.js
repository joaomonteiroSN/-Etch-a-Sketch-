const container = document.querySelector('.container');

const squareSize = (600/16);

let counter = 0;

while(counter < 256) {
    const square = document.createElement('div');
    square.classList.add('box-el');
    square.style.minWidth = `${squareSize}px`;
    container.appendChild(square);
    counter++;
}