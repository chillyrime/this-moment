/* getElementById, getElementByClass 등이 있지만 이들은 조건에 만족하는 모든 ID, Class를 가져옴
querySelector를 사용하면 css문법을 사용하여 조건에 만족하는 첫번째 요소만 가져올 수 있기 떄문에 좀 더 안전함.
또한 querySelectorAll로 조건에 만족하는 것들을 모두 가져올 수도 있음. */
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* preventDefault()는 event가 발생 시 브라우저가 기본 행동을 발생되지 않게 막는 역할을 함.
  예를 들어서 submit을 하더라도 브라우저가 새로고침 되지 않게 막음.
  argument는 선택사항으로, 넣게되면 JS가 알아서 발생하는 event 정보를 채워넣어 줌. */
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
