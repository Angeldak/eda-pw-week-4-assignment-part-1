console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  let greeting = `Hello there, ${name}!`;
  return greeting;
}
// Remember to call the function to test
console.log("helloName should return Hello there with the name, Megan:", helloName("Megan"))

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  let total = firstNumber + secondNumber;
  return total;
  //could also just directly return with -- return firstNumber + secondNumber;
}
console.log("addNumbers should add 3 and 5 to get 8", addNumbers(3, 5));


// 4. Function to multiply three numbers & return the result
function multiplyThree(numOne, numTwo, numThree) {
  let total = numOne * numTwo * numThree;
  return total;
}
console.log("multiplyThree should multiply 3 9 and 7 to return 189", multiplyThree(3, 9, 7))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true for 3', isPositive(3));
console.log('isPositive - should say false for 0', isPositive(0));
console.log('isPositive - should say false for -3', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}
console.log("Testing array [1,2,3]", getLast([1, 2, 3]));
console.log("Testing array [yes, no, maybe-so]", getLast(["yes", "no", "maybe-so"]));
console.log("Testing empty array []", getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  let counter = 0;
  for (items of array) {
    if (items === value) {
      counter++;
    }
  }
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Testing number 2 in array [1,2,3]", find(2, [1, 2, 3]));
console.log("Testing pizza in array [yes, no, maybe-so]", find("pizza", ["yes", "no", "maybe-so"]));
console.log("Testing pizza in array [spain, england, norway, russia, pizza, italy, france]", find("pizza", ["spain", "england", "norway", "russia", "pizza", "italy", "france"]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

//V2 non-case sensitive
function isFirstLetterAnyCase(letter, string) {
  if (string[0].toLowercase === letter.toLowercase) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetterAnyCase('A', 'apple'));
console.log('isFirstLetter - should say true also', isFirstLetterAnyCase('z', 'Zebra'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (items of array) {
    sum = sum + items;
  }
  return sum;
}
console.log("Should return 6", sumAll([1, 2, 3]));
console.log("Should return 1000", sumAll([10, 20, 30, 40, 900]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArrayNumbers(array) {
  let checkArray = [];
  for (items of array) {
    if (items > 0) {
      checkArray.push(items);
    }
  }
  return checkArray;
} //end positiveArrayNumbers
let testArray = [33, -234, 0, 2345, 23, -234, -34, .4, -.5, 0.3];
console.log("Check array -3 -2 -1 0 1 2 3: Should return 1 2 3", positiveArrayNumbers([-3, -2, -1, 0, 1, 2, 3]));
console.log("Check array -30 22 -10 0 11 -20 33: Should return 22 11 33", positiveArrayNumbers([-30, 22, -10, 0, 11, -20, 33]));
console.log("Check array -3 -2 -1 0 -1 -2 -3: Should return empty array", positiveArrayNumbers([-3, -2, -1, 0, -1, -2, -3]));
console.log("Checking testArray", positiveArrayNumbers(testArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//Description from a "Hard" Edabit: Create a function that takes an array of strings and returns an array 
//with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.
//While i'm sure there are more efficient ways to solve this (such as with RegEx, which I just learned about.) I solved this with two functions.
//One function is built to search a string for numbers and return true if it finds one.  The other loops though the array and runs the search 
//function on each string in the array.  Since we are in the function section this seems like a great option.  I do believe I could get this all
//into one function with some refactoring!

function findNumber(arr) {
  let counter = 0;
  for (item of arr) {
    if (!isNaN(parseInt(item))) {
      counter++;
    }
  }
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}

function numInStr(arr) {
  let newArray = [];
  for (i of arr) {
    if (findNumber(i)) {
      newArray.push(i)
    }
  }
  return newArray;
}

let numArray1 = ["1a", "2b", "c", "d", "e3"];
let numArray2 = ["a", "b", "c", "d"];
let numArray3 = [];

console.log("numArray1 should return: 1a,2b,e3 in an array", numInStr(numArray1));
console.log("numArray2 should return: an empty array", numInStr(numArray2));
console.log("numArray3 should return: an empty array also", numInStr(numArray3));