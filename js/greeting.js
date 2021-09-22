const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function submitHandler(event) {
    event.preventDefault();
    const typed_username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typed_username);
    removeLoginFormAndDisplayGreeting(typed_username);
}

function removeLoginFormAndDisplayGreeting(username) {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const stored_username = localStorage.getItem(USERNAME_KEY);

if (stored_username === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', submitHandler);
} else {
    removeLoginFormAndDisplayGreeting(stored_username);
}