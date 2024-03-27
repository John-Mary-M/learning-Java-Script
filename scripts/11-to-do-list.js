/*
1. create an arrya to store todos
2. when we click 'Add',
3. Get text from textbox
4. Add it to array
5. console.log (Array)
*/

// empty Array to store todos
const todoList = [
  "make dinner",
  "wash dishes"
];

renderTodoList();
// generating the HTML
function renderTodoList(){
  let todoListHTML = '';

  for (i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoListHTML += html
  }
  // console.log(todoListHTML);
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  // Get text from textbox
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}