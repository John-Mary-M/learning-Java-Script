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