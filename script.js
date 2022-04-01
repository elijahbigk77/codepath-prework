// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global variables
var pattern = []; //to be filled at game start
var patternLength = 8;
var numOfButtons = 6;
var numOfMistakes = 0;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 900; //how long to hold each clue's light/sound
var curScore = 0; //current score
var highScore = 0; //high score
var timer; //timer object
var timeGiven = 10; //how much time to guess after clues stop
var timeRemaining = 0; //how much time the player has left

function startGame() {
  //initialize game variables
  for (let i = 0; i < patternLength; i++)
    pattern[i] = Math.round(Math.random() * numOfButtons);
  let startingFreq = Math.random() * 120 + 120;
  for (let i = 0; i < numOfButtons; i++) freqMap[i + 1] = startingFreq + 30 * i;
  numOfMistakes = 0;
  progress = 0;
  gamePlaying = true;

  // swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;

  // swap the start and stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!.");
  document.getElementById("p2").innerHTML =
    "Game Over. You Won 🎊. Please restart";
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 299.7,
  6: 500,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  clueHoldTime *= 0.8;
  //context.resume();
  clearTimeout(timer);
  document.getElementById("p2").innerHTML = "Time remaining: " + timeGiven;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  timeRemaining = timeGiven;
  timer = setTimeout(function tick() {
    if (gamePlaying) {
      updateTimer();
      timer = setTimeout(tick, 1000); // (*)
    }
  }, delay);
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    if (numOfMistakes == 0)
      alert("Wrong guess. You have 2 Attempts left. Try again");

    if (numOfMistakes == 1) alert("Wrong guess. Last try");

    if (numOfMistakes < 2) numOfMistakes++;
    else loseGame();
  }
}

function show() {
  /* Access image by id and change
            the display property to block*/
  document.getElementById("image1").style.display = "block";

  document.getElementById("button1").style.display = "none";
}

function clearTimer() {
  clearTimeout(timer);
  timeRemaining = 0;
  document.getElementById("p2").innerHTML = "";
}
function updateTimer() {
  if (timeRemaining >= 0) {
    document.getElementById("p2").innerHTML =
      "Time remaining: " + timeRemaining;
    timeRemaining--;
  } else {
    document.getElementById("p2").innerHTML =
      "Time remaining: " +
      " " +
      "0" +
      " seconds." +
      " You run out of time." +
      " Please restart";
    loseGame();
  }
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
