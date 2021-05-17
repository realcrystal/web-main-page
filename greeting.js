const form = document.querySelector(".js-form-greeting"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function handleDocumentClick(event) {
  const target = event.target;
  if (target === greeting) {
    return;
  } else if (target === input) {
    return;
  } else {
    const currentValue = input.value;
    if (currentValue === "") {
      input.focus();
    } else {
      console.log("remove event listener");
      document.removeEventListener("click", handleDocumentClick);
      saveName(currentValue);
    }
  }
}

function handleNameClick() {
  greeting.classList.remove(SHOWING_CN);
  // input.placeholder = localStorage.getItem(USER_LS);
  input.value = localStorage.getItem(USER_LS);
  askForName();
  document.addEventListener("click", handleDocumentClick);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
  paintGreeting(text);
}

function handleNameSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  input.focus();
  form.addEventListener("submit", handleNameSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  greeting.classList.add(SHOWING_CN);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  greeting.addEventListener("click", handleNameClick);
}

init();
