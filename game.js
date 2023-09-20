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
    const localeWords = {
      'en': ['rock', 'scissors', 'paper',
        'Game Over', 'User point',
        'Computer point', 'Computer', 'User', 'Draw!',
        'You victory!', 'You lost!'],
      'ru': ['камень', 'ножницы', 'бумага',
        'Игра окончена', 'Очков у пользователя',
        'Очков у компьютера', 'Компьютер', 'Вы',
        'Ничья!', 'Вы победили!', 'Вы проиграли!'],
    };
    const lang = language === 'EN' || language === 'ENG' ?
      localeWords['en'] : localeWords['ru'];
    return function start() {
      let userFigure;
      let action;
      if (lang === localeWords['en']) {
        userFigure = prompt(`rock, scissors, paper`, '');
      } else {
        userFigure = prompt(`камень, ножницы, бумага`, '');
      }
      if (typeof userFigure === 'string' && userFigure !== null) {
        const computerFigure = getFigure(lang);
        if (userFigure.toLowerCase()[0] === lang[0][0] &&
            computerFigure[0] === lang[1][0] ||
            userFigure.toLowerCase()[0] === lang[1][0] &&
            computerFigure[0] === lang[2][0] ||
            userFigure.toLowerCase()[0] === lang[2][0] &&
            computerFigure[0] === lang[0][0]
        ) {
          ++result.player;
          alert(`
            ${lang[6]}: ${computerFigure} \n
            ${lang[7]}: ${userFigure.toLowerCase()} \n 
            ${lang[9]}`);
          start();
        } else if (userFigure.toLowerCase()[0] === computerFigure[0]) {
          alert(`
            ${lang[6]}: ${computerFigure} \n
            ${lang[7]}: ${userFigure.toLowerCase()} \n
            ${lang[8]}`);
          start();
        } else {
          ++result.computer;
          alert(`
            ${lang[6]}: ${computerFigure} \n
            ${lang[7]}: ${userFigure.toLowerCase()} \n
            ${lang[10]}`);
          start();
        }
      } else {
        if (lang === localeWords['en']) {
          action = confirm('Are you sure you want to go out?');
        } else {
          action = confirm('Точно ли вы хотите выйти?');
        }
        if (action) {
          alert(`
          ${lang[3]} \n
          ${lang[4]}: ${result.player} \n
          ${lang[5]}: ${result.computer}
          `);
          return;
        }
      }
    };
  };
  window.rockPaperScissors = game;
})();
