{
  //   /* <i class="fas fa-times"></i>; */
  //   <i class="far fa-circle"></i>;
}

const contenerItem = document.querySelectorAll('.contener__item');
const text = document.querySelector('.win');
const btnRefresh = document.querySelector('.wrap__btn');
const divReset = document.querySelector('.reset');
const divText = document.querySelector('.wrap__text');

const player1 = 'fas fa-times';
const player2 = 'far fa-circle';
let player1TabWin = [];
let player2TabWin = [];

let flag = true;

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function endGame(str) {
  console.log('Wygrywa');
  divReset.classList.remove('hidden');
  divText.textContent = str;
}

function check() {
const allClassGrey = [...contenerItem].every(item =>
    item.classList.contains('active')
  );
  
  //Check Draw
  if (allClassGrey) endGame('Draw!!!!');

  //Check Win
  combinations.forEach(combination => {
    if (combination.every(value => player1TabWin.indexOf(value) > -1)) {
      endGame("X's Win!!!");
    }
    if (combination.every(value => player2TabWin.indexOf(value) > -1)) {
      endGame("O's Win!!!");
    }
  });
}

function refresh() {
  divReset.classList.add('hidden');
  flag = true;
  player1TabWin = [];
  player2TabWin = [];
  contenerItem.forEach(item => {
    item.innerHTML = '';
    item.classList.remove('active');
  });
}

contenerItem.forEach(item => {
  item.addEventListener('click', function (e) {
    if (item.classList.contains('active')) return;
    else {
      const players = flag ? player1 : player2;
      const row = Number(e.target.dataset.row);
      flag ? player1TabWin.push(row) : player2TabWin.push(row);
      flag = !flag;
      item.classList.add('active');
      item.innerHTML = `<i class="${players}"></row>`;
      check();
    }
  });
});

btnRefresh.addEventListener('click', refresh);
