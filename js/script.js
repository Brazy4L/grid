const container = document.querySelector('.container');
let gridSide = 10;
let gridSize = gridSide ** 2;

// create grid using flexbox

for (i = 0; i < gridSize; i++) {
    const gridItem = document.createElement('div');
    container.appendChild(gridItem);
    gridItem.classList.add('grid-item');
    gridItem.style.cssText = 'flex-basis: calc(100% / ' + gridSide + '); background-color: #ff0; aspect-ratio: 1;';
};

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = '#000';
})});