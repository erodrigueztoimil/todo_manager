var todoInput = document.querySelector("#todo-text");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

var localTodos = localStorage.getItem('todos');
if (localTodos) {
  todos = JSON.parse(localTodos);
}

renderTodos();

// when the user writes a new todo and press 'enter'
todoInput.addEventListener('keypress', function(event) {
  if (event.key == 'Enter') {
    event.preventDefault();

    if (event.target.value) {
      var newTodo = event.target.value;
      // add the todo to the array of todos
      todos.push(newTodo);

      // clear the input
      event.target.value = '';
      
      renderTodos();
    }
  }
})

function renderTodos() {
  // when the page refreshes clear all todos
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    // list item elemnt
    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);

    // complete button element
    var button = document.createElement('button');
    button.innerText = 'Complete';
    button.setAttribute('index', i);
    li.appendChild(button);
  }

  // store todos in client side storage
  localStorage.setItem('todos', JSON.stringify(todos));
}

// when complete button is clicked, delete list item
todoList.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    // get the index attribute
    var buttonIndex = event.target.getAttribute('index');
    buttonIndex = parseInt(buttonIndex);
    // remove item from array
    todos.splice(buttonIndex, 1);

    renderTodos();
  }
})
