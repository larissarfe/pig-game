'use strict';

//--------- SELECTING ELEMENTS::
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); // # IS THE SELECTOR FOR THE ID - WHEN WE ARE SELECTING USING AN ID THEN THERE'S ACTUALLY ANOTHER WAY OF SELECTING AN ELEMENT
// ANOTHER WAY OF SELECTING ELEMENTS THAT ONLY WORKS BY ID:

const score1El = document.getElementById('score--1'); // NOW WE'RE NOT WRITING A SELECTOR, WE'RE ONLY PASSING IN THE NAME OF THE ID THAT WE'RE LOOKING FOR
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
// THE GETELEMENTBYID IS SUPPOSEND TO BE A LITTLE BIT FASTER THAN QUERYSELECTOR
// score0El and score1El are DOM elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// ------- STARTING CONDITIONS

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0]; // THE SCORES WILL BE AN ARRAY POSITION 0 FOR THE PLAYER 1 POSITION 1 FOR PLAYER 2
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0; // here we're writing numbers but JS will automatically convert them to strings to actually display them on the page
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

// PLAYER 0 SHOULD BE THE ACTIVE PLAYER IN THE BEGINNING

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // WE ARE REASSIGNING THE ACTIVE PLAYER HERE AND WE'RE CHEACKING WHEATHER RIGHT NOW IT IS PLAYER 0, IF IT IS THE RESULT OF THIS WHOLE OPERATION WILL BE 1 IF NOT, SO, IF THE ACTIVE PLAYER IS PLAYER 1 IT GOES TO PLAYER 0
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//-------- ROLLING THE DICE FUNCTIONALITY

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // this should not be a global variable because each time we roll the dice, we want to generate a new number
    console.log(dice); // --- trunc remove the decimal part

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // the string will be the name of the image displayed
    // this way we can dynamically load one of these six images depending on the random rolled dice;
    //------
    // 3. Check for rolled one
    if (dice !== 1) {
      // if it's not one - add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // HERE THE ID NAME IS SER DINAMICALLY
      //current0El.textContent = currentScore; // CHANGE LATER FOR THE CURRENT PLAYER
    } else {
      // SWITCHING THE NEXT PLAYER MEANS TO CHANGE THAT VALUE
      switchPlayer();
    }

    // the method toggle will add the class if it is not there or remove it if it is there
    // switch to next player
  }
});

// KNOWING WHICH IS THE ACTIVE PLAYER IS GOING TO BE IMPORTANT TO ACTUALLY DISPLEY THE CURRENT SCORE FOR THE CURRENT PLAYER
// AS WE SWITCH THE PLAYER WE ALSO NEED TO RESET THE CURRENT SCORE

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. ADD CURRENT SCORE TO THE ACTIVE PLAYER'S SCORE
    scores[activePlayer] += currentScore;
    //console.log(scores[activePlayer]);
    //scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. CHECK IF PLAYER'S SCORE IS AT LEAST 100 (>= 100)
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
  // 3. IF SO, FINISH THE GAME - IF NOT, SWITCH TO THE NEXT PLAYER
});

// TO FINISH THE GAME WE NEED TO WRITE A STATE VARIABLE AND THE CONDITION WILL BE IS THE GAME PLAYING OR NOT? IF THE GAME IS PLAYING THEN WE CAN CLICK THESE BUTTONS OF ROLL AND HOLD

btnNew.addEventListener('click', init);
