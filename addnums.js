const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
  return completionCallback(sum)
  };

  reader.question("ENTA NUMBA ONE: ", function(number1) {
    const num1 = parseInt(number1);
    sum += num1;
    console.log(sum);
    addNumbers(sum, numsLeft-1, completionCallback);
  });
};
  
// const addNumbers = function (sum, numsLeft, completionCallback) {

// };

// function anotherFunction (callback) {

// };

// anotherFunction(window.addNumbers)

// function finshingFunction (input#2) {
  
// }

// function question2 (input#1) {
//   reader.question("Enter #2: ", finshingFunction);
// }

// function question1 () {
//   reader.question("Enter #1: ", question2);
// }

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));