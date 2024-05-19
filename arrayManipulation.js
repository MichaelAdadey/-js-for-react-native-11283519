// arrayManipulation.js

/**
 * Function to process an array of numbers.
 * Squares each even number and triples each odd number.
 * @param {number[]} numbers - The array of numbers to process.
 * @returns {number[]} - The new array with processed numbers.
 */
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even numbers
        } else {
            return num * 3; // Triple the odd numbers
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]

module.exports = processArray;
