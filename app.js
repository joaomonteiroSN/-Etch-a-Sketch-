const container = document.querySelector('.container');

let counter = 0;

while(counter <= 256) {
    const square = document.createElement('div');
    square.classList.add('box-el');
    container.appendChild(square);
    counter++;
}