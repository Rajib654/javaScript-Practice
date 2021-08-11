'use strict';
let guessNumber = document.querySelector('.guess');
let checkBtn = document.querySelector('.check');
let playAgainBtn = document.querySelector('.again');
let message = document.querySelector('.message');
let scoreDisplay = document.querySelector('.score');
let highScoreDisplay = document.querySelector('.highscore');
let number = document.querySelector('.number');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//functions
const displayMassage = function (massage) {
  message.innerText = massage;
};

let checkNumber = function () {
  let guages = Number(guessNumber.value);
  //when therre is no input
  if (!guages) {
    // message.innerText = '⛔ No Number!';
    displayMassage('⛔ No Number!');
    //When Player wins
  } else if (guages === secretNumber) {
    // message.innerText = '🎉 Correct Number!';
    displayMassage('🎉 Correct Number!');
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.innerText = highScore;
    }

    //implement css style
    let body = document.querySelector('body');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.innerText = secretNumber;
  } else if (guages !== secretNumber) {
    if (score > 0) {
      //   message.innerText =
      //     guages > secretNumber ? '❗ Too Heigh!' : '❗ Too Low!';
      displayMassage(guages > secretNumber ? '❗ Too Heigh!' : '❗ Too Low!');
      score--;
      scoreDisplay.innerText = score;
    } else {
      //   message.innerText = '😥 You Lost The Game!';
      displayMassage('😥 You Lost The Game!');
    }
  }
  //   //when input number is too heigh
  //    else if (guages > secretNumber) {
  //     if (score > 0) {
  //       message.innerText = '❗ Too Heigh!';
  //       score--;
  //       scoreDisplay.innerText = score;
  //     } else {
  //       message.innerText = '😥 You Lost The Game!';
  //     }
  //     //when input number is too low
  //   } else if (guages < secretNumber) {
  //     if (score > 0) {
  //       message.innerText = '❗ Too Low!';
  //       score--;
  //       scoreDisplay.innerText = score;
  //     } else {
  //       message.innerText = '😥 You Lost The Game!';
  //     }
  //   }
};
checkBtn.addEventListener('click', checkNumber);

//Reset the game
let resetGame = function () {
  score = 20;
  //   highScore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   message.innerText = 'Start guessing...';
  displayMassage('Start guessing...');
  //   highScoreDisplay.innerText = highScore;
  scoreDisplay.innerText = score;
  number.innerText = '?';
  let body = document.querySelector('body');
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  guessNumber.value = '';
};
playAgainBtn.addEventListener('click', resetGame);
