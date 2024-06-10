// input... parameters, file, db, api, process.argv
// -> data-types
// output... return, file, db, api, stdout
// -> data-types
// processing... break-down the problem into TINY pieces

// Write a function that can sum 2 numbers.
// INPUT: parameter(s)
// * num1, data-type: number
// * num2, data-type: number
// OUTPUT: return
// * data-type: number
// PROCESSING:
// * adding num1 and num2 together
// * return the result


/**
 * Sums two numbers.
 * 
 * @param {number} num1 - First number to add.
 * @param {number} num2 - Second number to add.
 * @return {number} - The sum of num1 and num2.
 */
const sum = (num1, num2) => { // INPUT
  let result;

  // PROCESSING:
  result = num1 + num2;

  return Number(result); // OUTPUT
};


let answer = sum(1, 3);
console.log('sum(1, 3)', 4, sum(1, 3));

answer = sum(10, 10);
console.log('sum(10, 10)', 20, sum(10, 10));

answer = sum(-100, 37);
console.log('sum(-100, 37)', -63, sum(-100, 37));
