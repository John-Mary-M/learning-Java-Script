/*
1. create an arrya to store todos
2. when we click 'Add',
3. Get text from textbox
4. Add it to array
5. console.log (Array)
*/

// empty Array to store todos
const todoList = [{
  name: "make dinner",
  dueDate: '2024-03-28'
}, {
  name: "wash dishes",
  dueDate: '2024-03-28'
}];

renderTodoList();
// generating the HTML
let todoListHTML = '';
function renderTodoList(){
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index){
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
       
    <button onclick="
      todoList.splice(${index}, 1);
      renderTodoList();
    " class="delete-todo-button"> Delete</button>
    `;
    todoListHTML += html
  });
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
  
  




function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  // Get text from textbox
  const name = inputElement.value;
  
  // getting the date from the calendar box
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate
    name, 
    dueDate
  });
  //console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}