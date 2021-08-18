'use strict';
//select Elements and Assign them to variables
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.querySelector('#score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer, playing;

const init = function () {
    //total score container
    scores = [0, 0];
    //Current Score container
    currentScore = 0;
    //current playet container
    activePlayer = 0;

    playing = true;

    score0Elem.innerText = 0; //player-1 score set to zero
    score1Elem.innerText = 0; //player-2 score set to zero
    current0Elem.innerText = 0;
    current1Elem.innerText = 0;
    diceElem.classList.add('hidden');  //dice element hidden
    player0Elem.classList.remove('player--winner');
    player1Elem.classList.remove('player--winner');
    player0Elem.classList.add('player--active');
    player1Elem.classList.remove('player--active');
}
init();
//Switch Player Function
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).innerText = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Elem.classList.toggle('player--active');
    player1Elem.classList.toggle('player--active');
}


//Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        //01.Generating a rendom dice roll
        const dice = Math.trunc(Math.random() * 6) + 1
        console.log(dice);
        //Display dice
        diceElem.classList.remove('hidden');
        diceElem.src = `dice-${dice}.png`;

        //Check for rolled :1 
        if (dice !== 1) {
            //add dice to curent score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).innerText = currentScore;
        } else {
            //switch to next player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        //01.add the current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).innerText = scores[activePlayer];
        //02.check the current score>=100
        if (scores[activePlayer] >= 100) {
            //Finished the Game
            playing = false;
            diceElem.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //Switch to next Player
            switchPlayer();
        }
    }

})


btnNew.addEventListener('click', init);