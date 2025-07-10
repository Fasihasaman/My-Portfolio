const timerDisplay = document.querySelector("#timer");
const timeSelector = document.querySelector("#timeSelector");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resumeButton = document.querySelector("#resume");
const resetButton = document.querySelector("#reset");

let timecount = parseInt(timeSelector.value);
let timerId;
let isPaused = false;

timerDisplay.textContent = timecount;

timeSelector.addEventListener("change", () => {
    timecount = parseInt(timeSelector.value);
    timerDisplay.textContent = timecount;
    clearInterval(timerId);
});

startButton.addEventListener("click", () => {
    clearInterval(timerId);
    timecount = parseInt(timeSelector.value);
    timerDisplay.textContent = timecount;
    isPaused = false;
    runTimer();
});

pauseButton.addEventListener("click", () => {
    clearInterval(timerId);
    isPaused = true;
});

resumeButton.addEventListener("click", () => {
    if (isPaused && timecount > 0) {
        runTimer();
        isPaused = false;
    }
});

resetButton.addEventListener("click", () => {
    clearInterval(timerId);
    timecount = parseInt(timeSelector.value);
    timerDisplay.textContent = timecount;
    isPaused = false;
});

function runTimer() {
    timerId = setInterval(() => {
        if (timecount > 0) {
            timecount--;
            timerDisplay.textContent = timecount;
        } else {
            clearInterval(timerId);
            timerDisplay.textContent = "Time's up!";
        }
        console.log(timecount);
    }, 1000);
}