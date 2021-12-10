// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);

//Functions

function addToDo(e) {
  e.preventDefault();

  // creating div element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // creating li element
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // creating button (add)
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></li>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // creating button (trash)
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></li>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to list
  todoList.appendChild(todoDiv);

  // clear todoInput
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // check todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
