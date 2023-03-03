// * Calendar
const calSec = document.querySelector('#calendar');

const leftArrow = document.querySelector('.schedule .left-btn');
const rightArrow = document.querySelector('.schedule .right-btn');

// * Button
function handleCalendarBtn() {
  calSec.classList.toggle('ir');
  todoSec.classList.toggle('ir');
}

leftArrow.addEventListener('click', handleCalendarBtn);
rightArrow.addEventListener('click', handleCalendarBtn);

