'use strict';
(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const getRandomIntIncInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => lang[getRandomIntIncInclusive(0, 2)];

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };
    const language = prompt('Выберите язык?', 'EN');
    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;
    const gameOver = language === 'EN' || language === 'ENG' ?
    'Game Over' : 'Игра окончена';
    const userPoint = language === 'EN' || language === 'ENG' ?
    'User point' : 'Очков у пользователя';
    const computerPoint = language === 'EN' || language === 'ENG' ?
    'Computer point' : 'Очков у компьютера';
    const computer = language === 'EN' || language === 'ENG' ?
    'Computer' : 'Компьютер';
    const user = language === 'EN' || language === 'ENG' ?
    'User' : 'Вы';
    const draw = language === 'EN' || language === 'ENG' ?
    'Draw!' : 'Ничья!';
    const victory = language === 'EN' || language === 'ENG' ?
    'You victory!' : 'Вы победили!';
    const defeat = language === 'EN' || language === 'ENG' ?
    'You lost!' : 'Вы проиграли!';
    return function start() {
      let userFigure;
      if (lang === FIGURES_ENG) {
        userFigure = prompt(`rock, scissors, paper`, '');
      } else {
        userFigure = prompt(`камень, ножницы, бумага`, '');
      }
      if (userFigure === null) {
        let action;
        if (lang === FIGURES_ENG) {
          action = confirm('Are you sure you want to go out?');
        } else {
          action = confirm('Точно ли вы хотите выйти?');
        }
        if (action) {
          alert(`
          ${gameOver} \n
          ${userPoint}: ${result.player} \n
          ${computerPoint}: ${result.computer}
          `);
          return;
        } else {
          start();
        }
      } else {
        const computerFigure = getFigure(lang);
        if (userFigure.toLowerCase()[0] === computerFigure[0]) {
          alert(`
          ${computer}: ${computerFigure} \n
          ${user}: ${userFigure.toLowerCase()} \n
          ${draw}`);
          start();
        }
        if (userFigure.toLowerCase()[0] === lang[0][0] &&
          computerFigure[0] === lang[1][0] ||
          userFigure.toLowerCase()[0] === lang[1][0] &&
          computerFigure[0] === lang[2][0] ||
          userFigure.toLowerCase()[0] === lang[2][0] &&
          computerFigure[0] === lang[0][0]
        ) {
          ++result.player;
          alert(`
          ${computer}: ${computerFigure} \n
          ${user}: ${userFigure.toLowerCase()} \n 
          ${victory}`);
          start();
        } else {
          ++result.computer;
          alert(`
          ${computer}: ${computerFigure} \n
          ${user}: ${userFigure.toLowerCase()} \n
          ${defeat}`);
          start();
        }
      }
    };
  };

  window.rockPaperScissors = game;
})();
