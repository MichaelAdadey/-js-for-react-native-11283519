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

/**
 * Function to format an array of strings with a processed array of numbers.
 * Capitalizes the string if the corresponding number is even.
 * Converts the string to lowercase if the corresponding number is odd.
 * @param {string[]} strings - The array of strings.
 * @param {number[]} processedNumbers - The array of processed numbers.
 * @returns {string[]} - The new array of formatted strings.
 */
function formatArrayStrings(strings, processedNumbers) {
    if (strings.length !== processedNumbers.length) {
        throw new Error('The lengths of the two arrays must match.');
    }

    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); // Output: [3, 4, 9, 16, 15]

const stringArray = ['one', 'two', 'three', 'four', 'five'];
const formattedStrings = formatArrayStrings(stringArray, resultArray);
console.log(formattedStrings); // Output: ['one', 'TWO', 'three', 'FOUR', 'five']

module.exports = {
    processArray,
    formatArrayStrings
};
