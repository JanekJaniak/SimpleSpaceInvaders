const gridContainer = document.querySelector('[data-game-window]');

document.addEventListener('keypress', (event) => {
  switch (event.keyCode) {
    case 13 :
      if(gameState.isGameStarted === false) {
        startNewGame();
      }
      break;
    case 32 :
      fireRocket();
      break;
    default :
      console.log('No key bind');
  }
});

document.addEventListener('keydown', (event) => {
  switch (event.keyCode) {
    case 37 :
      movePlayer('37');
      break;
    case 39 :
      movePlayer('39');
      break;
    default:
      console.log('No key bind');
      
  }

})

const gameScore = document.querySelector('[data-game-score]');
const gameLevel = document.querySelector('[data-game-level');
const playerLifes = document.querySelector('[data-player-lifes]');

const grid = [];
const aliens = [
  3,5,7,9,11,13,
  20,22,24,26,28,30,
  37,39,41,43,45,47
];
const gameBorders = {
  top: [],
  right: [],
  bottom: [],
  left: []
};

const gameState = {
  isGameStarted: false,
  isGameOver: false,
  playerPosition: 161,
  gameStats: {
    lifes: 3,
    score: 0,
    level: 1
  },
  remainingAliens: [],
};

const renderGrid = () => {
    for (let i=0; i<170; i++) {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.dataset.tileId = i;
      gridContainer.appendChild(tile);
      grid.push(tile);
  }
};

const renderAliens = () => {
  for (let i=0; i < aliens.length; i++) {
    grid[aliens[i]].classList.add('alien');
  }
};

const renderPlayer = () => {
  const position = gameState.playerPosition
  grid[position].classList.add('player');
};

const welcomeScreen = () => {
  const container = document.createElement('div');
  const welcomeTxt = document.createElement('h1');

  container.className='welcomeContainer';
  gridContainer.appendChild(container);

  welcomeTxt.className='welcomeTxt';
  container.appendChild(welcomeTxt);
  welcomeTxt.innerHTML='Press enter to start';
};

const startNewGame = () => {
  if(gameState.isGameStarted == false) {
    gameState.isGameStarted = true;
    gridContainer.innerHTML='';
    gameScore.innerHTML=`SCORE: ${gameState.gameStats.score}`;
    gameLevel.innerHTML=`LEVEL: ${gameState.gameStats.level}`;
    playerLifes.innerHTML=`LIFES: 
      ${'&#9829'.repeat(gameState.gameStats.lifes)}`;
    renderGrid();
    renderAliens();
    renderPlayer();
    createBorders();
  }
};

const createBorders = () => {
  for(let i=0; i<17; i++) {
    gameBorders.top.push(i)
  }

  for(let i=153; i<189; i++) {
    gameBorders.bottom.push(i)
  }

  let leftBorderTile = 0;
  for(let i=0; i<10; i++) {
    if(leftBorderTile === 0) {
      gameBorders.left.push(i)
      leftBorderTile = leftBorderTile + 17 
    } else {
      gameBorders.left.push(leftBorderTile)
      leftBorderTile = leftBorderTile + 17;
    } 
  }

  let rightBorderTile = 16;
  for(let i=0; i<10; i++) {
    if(rightBorderTile === 16) {
      gameBorders.right.push(rightBorderTile)
      rightBorderTile = rightBorderTile + 17 
    } else {
      gameBorders.right.push(rightBorderTile)
      rightBorderTile = rightBorderTile + 17;
    } 
  }
}

const movePlayer = (keyCode) => {
  const playersDiv = document.querySelector(
  `[data-tile-id='${gameState.playerPosition}']`)
  const currentCode = gameState.playerPosition

  playersDiv.classList.remove('player');
  
  if(keyCode == 37) {
    currentCode >= 154 ? gameState.playerPosition -= 1 : null;
  } else {
    currentCode <= 168 ? gameState.playerPosition +=  1 : null;
  }

  renderPlayer();
}

const fireRocket = () => {
  console.log('Fire!!!');
  
}

startNewGame();