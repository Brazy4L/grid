const body = document.querySelector('body');
const div = document.createElement('div');
const div2 = document.createElement('div');

body.appendChild(div);
div.classList.add('big-container');
const bigcontainer = document.querySelector('.big-container');

bigcontainer.appendChild(div2);
div2.classList.add('container');
const container = document.querySelector('.container');

const button = document.createElement('button');
body.insertAdjacentElement('afterbegin', button);
button.textContent = 'Create a Grid';

body.style.cssText = 'margin: 0; background-color: #202020;';
bigcontainer.style.cssText = 'display: flex; justify-content: center;';
container.style.cssText = 'display: flex; flex-wrap: wrap; width: 92vh';
button.style.cssText = 'display: flex; height: 30px; width: 120px; border: none; border-radius: 10px; cursor: pointer; box-shadow: 0 9px #5c5c5c; margin: 20px auto; justify-content: center; align-items: center;';

button.addEventListener('click', function () {
    removeGrid();
    createGrid();
    mouseTrail();
});

function removeGrid() {
    container.innerHTML = '';
};

function createGrid() {
    let gridSide = prompt('Enter a number between 10 and 100');
    if (gridSide < 10 || gridSide > 100) {
        alert('Please enter a number between 10 and 100');
        return;
    }
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