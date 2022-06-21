'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const numberWidth = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const bodyColor = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);

    bodyColor('#60b347');
    numberWidth('30rem');

    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

// Reset for new guess
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  bodyColor('#222');
  numberWidth('15rem');
});
