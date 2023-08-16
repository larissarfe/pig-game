'use strict';

//--------- SELECTING ELEMENTS::
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
score0El.textContent = 0; // here we're writing numbers but JS will automatically convert them to strings to actually display them on the page

score1El.textContent = 0;

diceEl.classList.add('hidden');
let currentScore = 0;
//-------- ROLLING THE DICE FUNCTIONALITY

btnRoll.addEventListener('click', function () {
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
    current0El.textContent = currentScore; // CHANGE LATER FOR THE CURRENT PLAYER
  } else {
  } // switch to next player
});
