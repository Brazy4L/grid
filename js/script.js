const body = document.querySelector('body');
const bigcontainer = document.querySelector('.bigcontainer');
const container = document.querySelector('.container');

const button = document.createElement('button');
body.insertAdjacentElement('afterbegin', button);
button.textContent = 'Create a Grid';

button.addEventListener('click', function () {
    removeGrid();
    createGrid();
    mouseTrail();
});

function removeGrid() {
    container.innerHTML = '';
}

function createGrid() {
    let gridSide = prompt('Enter a number between 10 and 100');
    let gridSize = gridSide ** 2;
    for (i = 0; i < gridSize; i++) {
        const gridItem = document.createElement('div');
        container.appendChild(gridItem);
        gridItem.classList.add('grid-item');
        gridItem.style.cssText = 'flex-basis: calc(100% / ' + gridSide + '); background-color: #ff0; aspect-ratio: 1;';
}};

function mouseTrail() {
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = '#000';
})})};