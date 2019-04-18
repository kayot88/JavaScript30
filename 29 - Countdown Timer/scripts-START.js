let countdown;
const displayTimer = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  timeToEnd(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remindSec = seconds % 60;
  console.log({ minutes, remindSec });
  displayTimer.textContent = `${minutes < 10 ? '0' + minutes : minutes}:${
    remindSec < 10 ? '0' + remindSec : remindSec
  }  `;
  document.title = displayTimer.textContent;
}

function timeToEnd(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  timeEnd.textContent = `Be back at ${hours}: ${
    minutes < 10 ? '0' + minutes : minutes
  }`;
}

function startTimer() {
  const sec = parseInt(this.dataset.time);
  timer(sec);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function impVal(e) {
  e.preventDefault();
  const imp = this.minutes.value;
  timer(imp * 60);
  this.reset();
});
