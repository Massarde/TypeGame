window.addEventListener('load',init);

//avaliable levels
const levels = {
  easy: 5,
  medium:3,
  hard:2,
}
//to change the level
const currentLevel = levels.medium;

let time = currentLevel;
let score=0;
let isPlaying;


const wordInput =document.querySelector('#word-input')
const currentWord =document.querySelector('#current-word')
const scoreDisplay =document.querySelector('#score')
const timeDisplay =document.querySelector('#time')
const message =document.querySelector('#message')
const seconds =document.querySelector('#seconds')

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//initionlize game
function init(){
  //show number of seconds
  seconds.innerHTML = currentLevel;
  //load from Array
  showWord(words);
  //check word input
  wordInput.addEventListener('input', startMatch);
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50)

}
//start match
function startMatch(){
  if (matchWords ()){
    isPlaying = true;
    time= currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }
  if (score === -1) {
      scoreDisplay.innerHTML=0;
  } else {
      scoreDisplay.innerHTML= score;
  }
}

//match currentWord

function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
      message.innerHTML= 'Correct!!!';
      return true
    }else {
      message.innerHTML='';
      return false;
    }
}
//picking from array

function showWord(words) {
  const randIndex = Math.floor (Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

///countdown 

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

//check game status
function checkStatus(){
  if (!isPlaying && time ===0){
    message.innerHTML = 'Game Over'
    score=-1;
  } 
  
}