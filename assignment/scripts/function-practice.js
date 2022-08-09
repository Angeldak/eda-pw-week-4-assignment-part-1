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

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
