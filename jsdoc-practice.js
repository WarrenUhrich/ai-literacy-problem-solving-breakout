// Our goal:
// Write a function that returns the product of two numbers.

/**
 * Multiply two numbers
 * 
 * @param {number} num1 - First number for multiplication
 * @param {number} num2 - Second number for multiplication
 * @return {number} - Product of num1 and num2
 */
const multiplyTwoNums = (num1, num2) => { // 1. INPUT

    /**
     * 3. PROCESSING
     * * multiply num1 and num2
     * * could put in a var or in return
     */

    const product = num1 * num2;

    return Number(product); // 2. OUTPUT
};

console.log(
    'multiplyTwoNums(2, 5):',
    multiplyTwoNums(2, 5) // 10
);

console.log(
    'multiplyTwoNums(3, 3):',
    multiplyTwoNums(3, 3) // 9
);

console.log(
    'multiplyTwoNums(-2, 6):',
    multiplyTwoNums(-2, 6) // -12
);
