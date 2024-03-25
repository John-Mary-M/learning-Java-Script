/*
1. create an arrya to store todos
2. when we click 'Add',
3. Get text from textbox
4. Add it to array
5. console.log (Array)
*/

// empty Array to store todos
const todoList = [];

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  // Get text from textbox
  const name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}