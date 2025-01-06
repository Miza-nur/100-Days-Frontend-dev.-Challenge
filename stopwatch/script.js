const display = document.getElementById('display');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

let timer = null;
let elapsedTime = 0;
let isRunning = false;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);
  
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  }

  function startTimer() {
    const startTime = Date.now() - elapsedTime;
  
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = formatTime(elapsedTime);
    }, 10);
  
    isRunning = true;
  }
  
  function stopTimer() {
    clearInterval(timer);
    isRunning = false;
  }
  
  function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    display.textContent = '00:00.00';
    lapsContainer.innerHTML = ''; // Clear all lap times
  }
  
  function recordLap() {
    if (elapsedTime === 0) return; // Do nothing if stopwatch hasn't started
  
    const lapTime = formatTime(elapsedTime);
    const lapElement = document.createElement('div');
    lapElement.textContent = `Lap ${lapsContainer.childElementCount + 1}: ${lapTime}`;
    lapsContainer.appendChild(lapElement);
  }
  
  startStopButton.addEventListener('click', () => {
    if (isRunning) {
      stopTimer();
      startStopButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      startTimer();
      startStopButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
  });
  
  resetButton.addEventListener('click', resetTimer);
  lapButton.addEventListener('click', recordLap);

  
