'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntIncInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = () => FIGURES_RUS[getRandomIntIncInclusive(0, 2)];

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    return function start() {
      const userFigure = prompt(`камень, ножницы, бумага`, '');
      console.log(result);
      if (userFigure === null) {
        const action = confirm('Точно ли вы хотите выйти?');
        if (action) {
          alert(`
          Игра окончена. \n
          Очков у пользователя: ${result.player} \n
          Очков у компьютера: ${result.computer}
          `);
        } else {
          start();
        }
      } else if (userFigure === '') {
        start();
      } else {
        const toLowerUserFigure = userFigure.toLowerCase();
        const computerFigure = getFigure();

        console.log(computerFigure, userFigure);
        const userFigureLetter = toLowerUserFigure[0];
        const computerFigureLetter = computerFigure[0];
        console.log(userFigureLetter, computerFigureLetter);
        if (userFigureLetter === 'к' &&
          computerFigureLetter === 'н' ||
          userFigureLetter === 'н' &&
          computerFigureLetter === 'б' ||
          userFigureLetter === 'б' &&
          computerFigureLetter === 'к'
        ) {
          ++result.player;
          alert(`
          Компьютер: ${computerFigure} \n
          Вы: ${toLowerUserFigure} \n 
          Вы выйграли!`);
          start();
        } else if (userFigureLetter === 'к' &&
          computerFigureLetter === 'б' ||
          userFigureLetter === 'н' &&
          computerFigureLetter === 'к' ||
          userFigureLetter === 'б' &&
          computerFigureLetter === 'н') {
          ++result.computer;
          alert(`
          Компьютер: ${computerFigure} \n
          Вы: ${toLowerUserFigure} \n
          Вы проиграли!`);
          start();
        } else {
          alert(`
          Компьютер: ${computerFigure} \n
          Вы: ${toLowerUserFigure} \n
          Ничья!`);
          start();
        }
      }
    };
  };

  window.rockPaperScissors = game;
})();
