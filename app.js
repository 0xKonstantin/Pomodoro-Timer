const bells = new Audio("./sounds/bell.wav");
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let myInterval;
let state = true;
let stopped = false;

// Start timer function
const startTimer = () => {
  let sessionMinutes = Number.parseInt(minutes.textContent);
  let sessionSeconds = Number.parseInt(seconds.textContent);
  
  if (state) {
    state = false;
    let totalSeconds;

    if (sessionMinutes == 25) {
      totalSeconds = sessionMinutes * 60;
    } else {
      totalSeconds = sessionMinutes * 60 + sessionSeconds;
    }

    const updateSeconds = () => {
      const minuteDiv = document.querySelector(".minutes");
      const secondDiv = document.querySelector(".seconds");

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        secondDiv.textContent = `0${secondsLeft}`;
      } else {
        secondDiv.textContent = secondsLeft;
      }
      minuteDiv.textContent = `${minutesLeft}`;

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
        state = true; // Reset the state for the next timer session
      }
    };
  myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert("Session has already started.");
  }
};

// Stop timer function
const stopTimer = () => {
  let sessionMinutes = Number.parseInt(minutes.textContent);
  let sessionSeconds = Number.parseInt(seconds.textContent);
  if (state == false) {
    clearInterval(myInterval);
    state = true;
  } 
};

// Reset timer function
const resetTimer = () => {
  clearInterval(myInterval);

  const minuteDiv = document.querySelector(".minutes");
  const secondDiv = document.querySelector(".seconds");

  minuteDiv.innerHTML = "25";
  secondDiv.innerHTML = "00";

  state = true;
  
};

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
