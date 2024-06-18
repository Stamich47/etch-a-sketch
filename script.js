const container = document.querySelector('.container');

alert(
  `Move the mouse over the grid to draw \n \n Left mouse click anywhere in the grid to toggle Erase Mode \n \n Press the Spacebar to reset the grid`
);

for (let i = 0; i < 2500; i++) {
  const div = document.createElement('div');
  div.classList.add('no-hover');
  div.style.cssText = 'flex-basis: 2%';
  container.appendChild(div);
}

const squares = document.querySelectorAll('.no-hover');

function toggleSquare() {
  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      if (square.classList.contains('hover')) {
        square.classList.remove('hover');
      } else {
        square.classList.add('hover');
      }
    });
  });
}

squares.forEach((square) => {
  square.addEventListener('mouseover', () => {
    square.classList.add('hover');
    square.addEventListener('click', toggleSquare);
  });
});

function eraseBoard() {
  document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.code === 'Space') {
      squares.forEach((square) => {
        square.classList.remove('hover');
      });
    }
  });
}

eraseBoard();
