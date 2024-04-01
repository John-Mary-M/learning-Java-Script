// 11o:
const strArray = ['hello', 'world', 'search', 'good', 'search']
const anotherArry = ['not', 'found']
// searching for string 'search' in the strArray

let element = 'search';
let index = strArray.indexOf(element);

if (element){
  console.log (index);
} else {
    console.log (-1);
}

// 11q: findIndex(array, word)
function finsIndex(array, word){
  // finds word inside array and returns the index of its first occurance. else it returns -1.
  let element = word;
  let indexOfWord = array.indexOf(element);

  if (element){
    console.log(indexOfWord);
  } else {
    console.log (-1);
  }
}

finsIndex(['green', 'red', 'blue', 'red'], 'red');
finsIndex(['green', 'red', 'blue', 'red'], 'yellow');

// 11r
function removeEgg(foods){
  let eggCount = 0;
  const newFoodList = [];

  // Iterating through each food item
  for (let i = 0; i < foods.length; i++) {
    // Check if the current food item is 'egg' and we haven't encountered it twice yet
    if (foods[i] === 'egg' && eggCount < 2) {
      // Increment the egg count
      eggCount++;
    } else {
      // If it's not 'egg' or we have encountered it twice already, add it to the new food list
      newFoodList.push(foods[i]);
    }
  }
  // Return the modified food list without the first two occurrences of 'egg'
  return newFoodList;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 11t
function removeLastTwoEggs(foods) {
  // Reverse the array
  const reversedFoods = foods.reverse();

  // Count occurrences of 'egg'
  let eggCount = 0;
  const newFoodList = [];
  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggCount < 2) {
      eggCount++;
    } else {
      newFoodList.push(reversedFoods[i]);
    }
  }

  // Reverse the modified array back to its original order
  const finalFoodList = newFoodList.reverse();
  
  return finalFoodList;
}

// Example usage:
let foods = ["cake", "egg", "pancake", "omelette", "egg", "scrambled egg", "egg"];
let modifiedFoods = removeLastTwoEggs(['egg', 'apple', 'egg', 'egg', 'ham']);
console.log(modifiedFoods); // Output: ["cake", "egg", "pancake", "omelette", "scrambled egg"]

// 11u
function removeLastTwoEggs(foods) {
  // make a copy of the orignal array using slice
  const copyOfFoods = foods.slice();
  // Reverse the array
  const reversedFoods = copyOfFoods.reverse();

  // Count occurrences of 'egg'
  let eggCount = 0;
  const newFoodList = [];
  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggCount < 2) {
      eggCount++;
    } else {
      newFoodList.push(reversedFoods[i]);
    }
  }

  // Reverse the modified array back to its original order
  const finalFoodList = newFoodList.reverse();
  
  return finalFoodList;
}

//11v: FizzBuzz
for (let i = 0; i < 20; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  } else if (i % 3 === 0){
    console.log('Fizz');
  } else if (i % 5 === 0 ){
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
