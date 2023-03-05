// * Login
const USERNAME_KEY = 'username';
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
  const readerValue = localStorage.getItem('profile_img');
  if(readerValue) {
    profileImg.src = readerValue;
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
    window.location.reload();
  } else {
    return;
  }
}

if (!localStorage.getItem(USERNAME_KEY)) {
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
      localStorage.setItem('profile_img', reader.result);
    });
  }
);

logoutBtn.addEventListener('click', handleLogout);