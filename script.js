'use strict';

//--------- SELECTING ELEMENTS::
const score0El = document.querySelector('#score--0'); // # IS THE SELECTOR FOR THE ID - WHEN WE ARE SELECTING USING AN ID THEN THERE'S ACTUALLY ANOTHER WAY OF SELECTING AN ELEMENT
// ANOTHER WAY OF SELECTING ELEMENTS THAT ONLY WORKS BY ID:

const score1El = document.getElementById('score--1'); // NOW WE'RE NOT WRITING A SELECTOR, WE'RE ONLY PASSING IN THE NAME OF THE ID THAT WE'RE LOOKING FOR
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

//-------- ROLLING THE DICE FUNCTIONALITY
