const container = document.querySelector('.container');
let gridSide = 10;
let gridSize = gridSide ** 2;
container.style.gridTemplateColumns = `repeat(${gridSide}, 1fr)`;

for (i = 0; i < gridSize; i++) {
    const gridItem = document.createElement('div');
    container.appendChild(gridItem);
    gridItem.classList.add('grid-item');
    gridItem.style.cssText = 'background-color: #ff0; aspect-ratio: 1;';
};