// * Clock
const secHand = document.querySelector('#secHand');
const minHand = document.querySelector('#minHand');
const hourHand = document.querySelector('#hourHand');
const clock = document.querySelector('#clock');
const timerSelect = document.querySelector('#timerSelect');
const timerList = document.querySelector('#timerList');
const timerPanel = document.querySelector('#timerPanel');
const timerMin = document.querySelector('.panel-item.min');
const timerSec = document.querySelector('.panel-item.sec');
const leftBtn = document.querySelector('.clock-btn.left');
const rightBtn = document.querySelector('.clock-btn.right');

function handleClock() {
  const date = new Date();
  const secDeg = date.getSeconds() * 6;
  const minDeg = date.getMinutes() * 6;
  const hourDeg = date.getHours() * 30 + date.getMinutes() * 0.5;
  secHand.style.rotate = secDeg + 'deg';
  minHand.style.rotate = minDeg + 'deg';
  hourHand.style.rotate = hourDeg + 'deg';
}
handleClock();
setInterval(handleClock, 1000);

// * timer
timerList.addEventListener('click', (e) => {
  let selectedMin = parseInt(e.target.textContent) * 60;
  timerSelect.classList.toggle('ir');
  timerPanel.classList.toggle('ir');

  function handleTimer() {
    const min = parseInt(selectedMin / 60);
    const sec = String(selectedMin % 60);
    timerMin.textContent = min;
    timerSec.textContent = sec.padStart(2, '0');
    selectedMin--;

    if (selectedMin < 0) {
      clearInterval(interval);
      timerMin.textContent = '0';
      timerSec.textContent = '00';
      setTimeout(() => {
        timerPanel.classList.add('timeout');
      }, 1000)
      setTimeout(() => {
        timerPanel.classList.remove('timeout');
        timerPanel.classList.toggle('ir');
        timerSelect.classList.toggle('ir');
      }, 2000)
    }
  }
  handleTimer();
  const interval = setInterval(handleTimer, 1000);
})

// * btn
function handleClockBtn() {
  clock.classList.toggle('ir');
  timer.classList.toggle('ir');
}
leftBtn.addEventListener('click', handleClockBtn);
rightBtn.addEventListener('click', handleClockBtn);