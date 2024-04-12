// 12a
const add = function (){
  return (2+3);
}
add();

// 12b
function runTwice(fun){
  fun();
  fun();
}
function fun(){
  console.log('12b');
}
runTwice(fun);

// 12c: finished

function finished(){
  let button = document.querySelector('.js-start-button');
  button.innerText = 'Finished!';
}

// 12d:
function finished2(){
  let button = document.querySelector('.js-start-button2');
  button.innerText = 'Loading...';
}

//12e 
function addToCart(){
  let result = document.querySelector('.js-added');
  result.innerText = 'Added';
}

// 12g
// Initial number of messages
let messages = 2;

// Function to update title
function updateTitle() {
  let docTitle = document.title;
  let newTitle = messages + 'New messages'; // Update title with the number of messages

  
  setInterval(function(){
    document.title = newTitle;  // Update title
  }, 1000); // Interval in milliseconds (1 second)

}


// Function to handle adding a message
function addMessage() {
  messages += 1; // Increment the number of messages
  updateTitle(); // Update title
}

// Function to handle removing a message
function removeMessage() {
  if (messages > 1) {
    messages -= 1; // Decrement the number of messages (minimum 1)
    updateTitle(); // Update title
  }
}

// Add event listeners to the buttons
document.getElementById("addButton").addEventListener("click", addMessage);
document.getElementById("removeButton").addEventListener("click", removeMessage);




// Call the function once the page is loaded
window.onload = function(){
  updateTitle();
};