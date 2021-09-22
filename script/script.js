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
  combinations.forEach(combination => {
    // Check Draw
    const allClassGrey = [...contenerItem].every(item =>
      item.classList.contains('active')
    );
    if (allClassGrey) endGame('Draw!!');

    //Check Win

    if (combination.every(value => player1TabWin.indexOf(value) > -1))
      endGame("X's Win!!!");

    if (combination.every(value => player2TabWin.indexOf(value) > -1))
      endGame("O's Win!!!");
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

// const EndGame = function (win) {
//   contenerItem.forEach(item => {
//     item.removeEventListener('click', StartGame);
//     item.style.cursor = 'auto';
//   });
//   text.textContent = win;
// };

// const check = function () {
//   const result = WinConditions.reduce((total, row) => total.concat(row));
//   console.log(result);

//   let winner = '';
//   //   let moves = {
//   //     'fas fa-times': [],
//   //     'far fa-circle': [],
//   //   };

//   result.forEach((field, index) =>
//     moves[field] ? moves[field].push(index) : null
//   );
//   console.log(moves);

//   combinations.forEach(combination => {
//     if (combination.every(index => moves[player1].indexOf(index) > -1)) {
//       winner = 'Wygrywa gracz 1!!!🎉🎉🎉';
//       EndGame(winner);
//     }

//     if (combination.every(index => moves[player2].indexOf(index) > -1)) {
//       winner = 'Wygrywa gracz 2!!!🎉🎉🎉';
//       EndGame(winner);
//     }
//   });
// };

// const Game = function (players, item) {
//   item.classList.add('grey');
//   const fav = document.createElement('i');
//   fav.className = players;
//   item.appendChild(fav);
// };

// const StartGame = function (event) {
//   const contant = this.classList.contains('grey');

//   if (!contant) {
//     console.log(contant);

//     const players = flag ? player1 : player2;
//     flag = !flag;
//     const item = event.target;
//     Game(players, item);

//     const { row, column } = event.target.dataset;
//     WinConditions[row][column] = players;

//     check();
//   } else return;
// };

// contenerItem.forEach(item => {
//   item.addEventListener('click', StartGame);
// });
