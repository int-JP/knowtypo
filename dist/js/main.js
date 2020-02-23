window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

let string_to_array = function (stringz) {
  return stringz.trim().split(" ");
};
let FirstGradeWordsArray = string_to_array("about each if nice than walk after every jump now thank want again find just old their way also first keep only them went another from kind or then were any funny know other these when ask give learn over thing where back going live people think which because great long put use word been had many rain very work before hers may right wouldby high more should write could house much some your day how yours");

let words = FirstGradeWordsArray;

// let wordsString = "about each if nice than walk after every jump now thank want again find just old their way also first keep only them went another from kind or then were any funny know other these when ask give learn over thing where back going live people think which because great long put use word been had many rain very work before hers may right wouldby high more should write could house much some your day how yours";

// let wordsArray = wordsString.split(" ");


// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}

// Add new word item 
  let newWord = document.getElementById("word").value;
  FirstGradeWordsArray.push(newWord);
  document.getElementById("demo").innerHTML = FirstGradeWordsArray;
  console.log(newWord);