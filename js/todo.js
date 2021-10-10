const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-ul');

function paintTodo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'x';
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    span.innerText = newTodo;
    button.addEventListener('click', todoListDeleteHandler);
}

function todoFormSubmitHandler(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    paintTodo(newTodo);
    todoInput.value = '';
};

function todoListDeleteHandler(event) {
    const li = event.target.parentElement;
    li.remove();
}

todoForm.addEventListener('submit', todoFormSubmitHandler);