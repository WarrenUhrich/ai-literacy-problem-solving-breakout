# Lighthouse Labs | AI Literacy: Problem Solving

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-ai-literacy-problem-solving-breakout/tree/2024-05-13-web-immersive-national-1april2024) | [Vimeo Video Recording](https://vimeo.com/945959748/817ff06ac5?share=copy)

## Problem Solving Steps

* Read and understand the problem
* Input - where does the info we need come from?
    * Data-Type / Format?
    * Where should this be?
        * File
        * Database
        * Parameters
        * CL Arguments
* Output - what does our result need to look like, and where should it go?
    * Data-Type / Format?
    * Where should this be?
        * File
        * Database
        * `return`
        * Display in-terminal? `process.stdout` || `console.log`
* Processing
    * Consider the data-types involved...
        * Array? -> loop... indexes... `forEach`, `map`, `reduce`... length
        * Object? -> loop thru' keys... key... `Object.keys`, `Object.values`
    * Consider the big picture, what can we do with our input to take steps toward our output?
    * Break this down into tinier and tinier steps as pseudo-code
    * Write out an example or two of using this feature
    * Finally, write out your real code


```js

/**
 * Sum two numbers
 * 
 * @param {number} num1 - First number to add.
 * @param {number} num2 - Second number to add.
 * @return {number} - The sum of num1 and num2.
 */
const sumTwoNums = (num1, num2) => {
    let sum;

    // Processing
    sum = Number(num1) + Number(num2);

    return Number(sum);
};

const result = sumTwoNums(3, 5);
console.log('result:', result); // 8

```
