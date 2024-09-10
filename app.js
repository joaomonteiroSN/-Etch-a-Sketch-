const container = document.querySelector('.container');

const squareSize = (602/16);

let counter = 0;

while(counter <= 255) {
    const square = document.createElement('div');
    square.classList.add('box-el');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
    counter++;
}