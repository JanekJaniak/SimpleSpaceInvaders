const gridContainer = document.querySelector('[data-game-window]');

const grid = [];
const aliens = [
  2,4,6,8,10,12,
  17,19,21,23,25,27,
  32,34,36,38,40,42
]

const renderGrid = () => {
    for (let i=0; i<150; i++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.dataset.tileId = i;
      gridContainer.appendChild(tile);
      grid.push(tile);
  }
}

const renderAliens = () => {
  for (let i=0; i < aliens.length; i++) {
    grid[aliens[i]].classList.add('alien');
  }
}

const renderPlayer = () => {
  grid[142].classList.add('player');
}

const welcomeScreen = () => {
  const container = document.createElement('div');
  const welcomeTxt = document.createElement('h1');

  container.className='welcomeContainer';
  gridContainer.appendChild(container);

  welcomeTxt.className='welcomeTxt';
  container.appendChild(welcomeTxt);
  welcomeTxt.innerHTML='Press space to start';
}

const startNewGame = () => {
  renderGrid();
  renderAliens();
  renderPlayer();
}

welcomeScreen()