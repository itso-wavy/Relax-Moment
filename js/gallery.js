// * Gallery
const wallpaper = document.querySelector('.gallery');
const quotes = document.querySelector('#quotes');
const flipBtn = document.querySelector('#flipBtn');

const wallpaperList = [];
for (let i = 1; i <= 10; i++) {
  wallpaperList.push(`unsplash${i}.jpg`)
}

const quotesList = [
  '숨을 깊게 들이마셔요.',
  '따뜻한 차 한잔과 함께 하고 있나요?',
  '모든 것에 대해 스스로를 용서하세요.',
  '당신은 자유롭고, 강력하고, 선하며 목표가 있는 사람입니다.',
  '매일 더 편안해지는 중입니다.',
  '당신은 중요해요',
  '너무 깊게 생각하지 마세요. 과한 생각은 존재한 적도 없는 문제로 이어집니다.',
  '어디에 있든 지금 있는 곳에서 행복하세요.',
  '어려운 상황에도 침착함을 유지하는 것이 당신이 지닌 초능력입니다.',
  '조용히 노력해서 큰 성공을 이루세요.',
]

function makingRandomNum () {
  const randomNum = Math.floor(Math.random() * 10);
  wallpaper.style.background = `url(../assets/background/${wallpaperList[randomNum]}) center/cover no-repeat`;
  quotes.innerText = quotesList[randomNum];
}

makingRandomNum();

flipBtn.addEventListener('click', makingRandomNum);