// * Login
const USERNAME_KEY = localStorage.getItem('username');
const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginInput');
const profileBox = document.querySelector('#profileBox');
const profileName = document.querySelector('#profileName');
const imgInput = document.querySelector('#imgInput');
const imgUpload = document.querySelector('#imgUpload');
const initial = document.querySelector('#initial');
const profileImg = document.querySelector('#profileImg');
const logoutBtn = document.querySelector('#logoutBtn');

function getUserInfo() {
  username = localStorage.getItem('username');
  profileName.innerText = username.toLowerCase();
  loginInput.classList.toggle('ir');
  profileBox.classList.toggle('ir');
  const USERNAME_VALUE = localStorage.getItem('PROFILE_IMG_KEY');
  if(USERNAME_VALUE) {
    profileImg.src = USERNAME_VALUE;
    profileImg.classList.remove('ir');
  } else {
    initial.innerText = username[0].toLowerCase();
  }
}

function handleLogout() {
  if (
    confirm('When you log out all existing information will be deleted.')
  ) {
    localStorage.clear();
    // TODO: 프사, 지역정보, 투두 등 정보 전부 삭제
    window.location.reload();
  } else {
    return;
  }
}

if (!USERNAME_KEY) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = loginInput.value;
    if (username.length === 0) {
      loginInput.placeholder = 'What should I call you?';
    } else if (username.length > 10) {
      loginInput.value = '';
      loginInput.placeholder = 'Wow, Your name is really long';
    } else {
      loginInput.value = '';
      localStorage.setItem('username', username);
      getUserInfo();
    }
  })
} else {
  getUserInfo();
}

imgInput.addEventListener('change', function () {
  const uplodedImg = this.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uplodedImg);
    reader.addEventListener('load', () => {
      profileImg.src = reader.result;
      profileImg.classList.remove('ir');
      initial.classList.add('ir');
      localStorage.setItem('PROFILE_IMG_KEY', reader.result);
    });
  }
);

logoutBtn.addEventListener('click', handleLogout);




