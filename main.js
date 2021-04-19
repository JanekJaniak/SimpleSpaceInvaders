const gridContainer = document.querySelector('[data-game-window]');
document.addEventListener('keypress', (event) => {
  if(gameState.isGameStarted === false) {
    event.keyCode == 13 ? startNewGame() : null;
  }
});

const grid = [];
const aliens = [
  2,4,6,8,10,12,
  17,19,21,23,25,27,
  32,34,36,38,40,42
];

const gameState = {
  isGameStarted: false,
  isGameOver: false,
  player: {
    lives: 3,
    score: 0,
    level: 1
  },
  remainingAliens: [],
}

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
  welcomeTxt.innerHTML='Press enter to start';
}

const startNewGame = () => {
  gameState.isGameStarted = true;
  gridContainer.innerHTML='';
  renderGrid();
  renderAliens();
  renderPlayer();
}

welcomeScreen()