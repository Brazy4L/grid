const container = document.querySelector('.container');
let gridSide = 100;
let gridSize = gridSide ** 2;

for (i = 0; i < gridSize; i++) {
    const gridItem = document.createElement('div');
    container.appendChild(gridItem);
    gridItem.classList.add('grid-item');
    gridItem.style.cssText = 'background-color: #ff0; aspect-ratio: 1;';
};

container.style.gridTemplateColumns = `repeat(${gridSide}, 1fr)`;

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseenter', () => {
        gridItem.style.backgroundColor = '#000';
})});