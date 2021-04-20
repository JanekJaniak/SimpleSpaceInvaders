const gridContainer = document.querySelector('[data-game-window]');
document.addEventListener('keypress', (event) => {
  event.keyCode == 13 ? startNewGame() : null;
})

const grid = [];
const aliens = [
  3,5,7,9,11,13,
  20,22,24,26,28,30,
  37,39,41,43,45,47
]

const renderGrid = () => {
    for (let i=0; i<170; i++) {
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
  grid[160].classList.add('player');
}

const welcomeScreen = () => {
  const container = document.createElement('div');
  const welcomeTxt = document.createElement('h1');

  container.className='welcomeContainer';
  gridContainer.appendChild(container);

  welcomeTxt.className='welcomeTxt';
  container.appendChild(welcomeTxt);
  welcomeTxt.innerHTML='Press enter to start';
}

const startNewGame = () => {
  gridContainer.innerHTML=''
  renderGrid();
  renderAliens();
  renderPlayer();
}

welcomeScreen()