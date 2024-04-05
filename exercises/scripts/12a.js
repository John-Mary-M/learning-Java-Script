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
// function changes the title
function changeTitle(){
  let docTitle = document.title;
  let newTitle = 0;
  let toggle = true;  // variable to toggle between titles

  setInterval(function(){
    if (toggle){
      document.title = docTitle; // change to orignal title
    } else {
      document.title = newTitle;  // change to new title
    }
    toggle = !toggle;  // toggle value for next iteration
  }, 1000);
}

// calling the function once the page loads
window.onload = function(){
  changeTitle();
}