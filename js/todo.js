const todoForm = document.querySelector('#todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.querySelector('#todo-ul');
let todoObjs = [];

const TODOS_KEY = 'todos';

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
    todoObjs = JSON.parse(savedTodos);
}
todoObjs.forEach(paintTodo);

function paintTodo(newTodoObj) {
    const li = document.createElement('li');
    li.id = newTodoObj.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'x';
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    span.innerText = newTodoObj.text;
    button.addEventListener('click', todoListDeleteHandler);
}

function todoFormSubmitHandler(event) {
    event.preventDefault();
    const newTodoObj = {
        text: todoInput.value,
        id: Date.now()
    };
    paintTodo(newTodoObj);
    todoObjs.push(newTodoObj);
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoObjs));
    todoInput.value = '';
};

function todoListDeleteHandler(event) {
    const li = event.target.parentElement;
    console.log(todoObjs, li.id);
    todoObjs = todoObjs.filter(todo => parseInt(li.id) !== todo.id);
    li.remove();
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoObjs));
    console.log(todoObjs, li.id);
}

todoForm.addEventListener('submit', todoFormSubmitHandler);