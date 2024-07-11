const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds")
let myInterval;
let state = true;
let stopped = false;

const startTimer = () => {
  const sessionAmount = Number.parseInt(minutes.textContent);
  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
      const minuteDiv = document.querySelector(".minutes");
      const secondDiv = document.querySelector(".seconds");

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
      } else {
        secondDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`;

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
      }
    };
    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert("Session has already started.");
  }
};

const stopTimer = () => {
const sessionMinutes = Number.parseInt(minutes.textContent);
const sessionSeconds = Number.parseInt(seconds.textContent);
  if (state == false) {
    clearInterval(myInterval);
    state = true;
  } else {
    state = false
    let totalMinutes = sessionMinutes;
    let totalSeconds = sessionSeconds;
    const updateSeconds = () => {
      const minuteDiv = document.querySelector(".minutes");
      const secondDiv = document.querySelector(".seconds");

      totalSeconds--;

      let minutesLeft = totalMinutes;
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
      } else {
        secondDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`;

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
      }
    };
    myInterval = setInterval(updateSeconds, 1000);
  }
};

const resetTimer = () => {
  clearInterval(myInterval);
 
    const minuteDiv = document.querySelector(".minutes");
    const secondDiv = document.querySelector(".seconds");

    minuteDiv.innerHTML = '25';
    secondDiv.innerHTML = '00'
    
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
