// * Topbar
const searchingForm = document.querySelector('#searchingForm')
const searchingInput = document.querySelector('#searchingInput')
const searchingBtn = document.querySelector('#searchingBtn')

function handleSearch() {
  const word = searchingInput.value;
  if (word) {
    link = 'https://dict.naver.com/search.nhn?query=' + word;
  } else {
    link = searchingBtn.href;
  }
}

searchingBtn.addEventListener('click', () => {
  handleSearch();
  searchingBtn.href = link;
})

searchingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleSearch();
  location.href = link;
})