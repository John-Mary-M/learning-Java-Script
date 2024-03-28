// 11a
// an array of numbers
const nums = [10, 20, 30];
// modify the last value in the array 
nums[2] = 99;
console.log(nums); 

// 11b
// function takes an array and returns the last value in the arry

function getLastValue(array){
  const lastValue = array.length -1;
  return array[lastValue];
}
const sArray = [1, 20, 22, 24, 5];
const res = getLastValue(sArray);
console.log(res)
console.log(getLastValue(['hi', 'hello', 'good']));

// c
// arraySwap takes an array and returns the same array with the first and last values swapped.
const arry = [1, 20, 22, 24, 5];

function arraySwap(array){
  // swapping in place
  [array[0], array[array.length-1]] = [array[array.length-1], array[0]];

  return array;
}
console.log(arraySwap(arry));
console.log(arraySwap(nums));
/*
// d loop that counts 0 -> 10 in increaments of 2
for (i = 0; i < 11; i+=2){
  console.log(i);
}

// 11e a count down loop
for (i = 5; i !== 0; i--){
  console.log(i);
}
*/
// 11f repeating d and e above with a while loop
let count = 0;
while (count < 11){
  console.log(count);
  count += 2;
}
let countDown = 5;
while (countDown !== 0){
  console.log(countDown);
  countDown -= 1;
}

// 11g looping through an array and increamenting each value by 1
const numArry = [1, 2, 3];
const newArry = []; // newArry will hold the incremented values
for (let i = 0; i < numArry.length; i++){
  const value = numArry[i]; // storing each value of numArry in a variable
  newArry.push(value + 1); // adding the values to newArry one by one.
}
console.log(newArry);

// 11h. addOne(array) returns an array where each value is increased by one
function addOne(array){
  const returnArray = [];
  for (let i = 0; i < array.length; i++){
    const members = array[i];
    returnArray.push(members + 1);
  }
  return returnArray;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));