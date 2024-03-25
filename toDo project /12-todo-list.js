let TodoList = JSON.parse(localStorage.getItem("TodoList")) || [
  {
    name: "read",
    dueDate: "2024-02-06"
  },
  {
    name: "trade ",
    dueDate: "2024-02-06"
  },
  {
    name: "code",
    dueDate: "2024-02-06"
  }
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  TodoList.forEach((todoObject, index)  => {
    const { name, dueDate } = todoObject;
    const html = `
<div>${name}</div>
<div>${dueDate}</div> 
 <button 
 class="delete-todo-button js-delete-todo-button">Delete</button>
 `;
    todoListHtml += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      TodoList.splice(index, 1);
      renderTodoList();

      
    })
  });
}
// document.querySelector(".js-todo-list").innerHTML = todoListHtml;

document.querySelector('.js-add-todo-button').addEventListener('click', ()=> {
  addTodo();
})

function addTodo() {
  const add = document.querySelector(".text");
  const name = add.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  //console.log(add);

  TodoList.push({
    name,
    dueDate
  });
  add.value = "";

  renderTodoList();

  //SAVE in localstorage

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("TodoList", JSON.stringify(TodoList));
}
