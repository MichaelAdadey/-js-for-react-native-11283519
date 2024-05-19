// userInfo.js

/**
 * Function to create user profiles.
 * Takes an array of original names and an array of modified names,
 * and returns an array of objects with originalName, modifiedName, and id.
 * @param {string[]} originalNames - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - The array of user profile objects.
 */
function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error('The lengths of the two arrays must match.');
    }

    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const originalNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const modifiedNames = ['alice', 'BOB', 'charlie', 'DAVID', 'eve'];
const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
// Output:
// [
//   { id: 1, originalName: 'Alice', modifiedName: 'alice' },
//   { id: 2, originalName: 'Bob', modifiedName: 'BOB' },
//   { id: 3, originalName: 'Charlie', modifiedName: 'charlie' },
//   { id: 4, originalName: 'David', modifiedName: 'DAVID' },
//   { id: 5, originalName: 'Eve', modifiedName: 'eve' }
// ]

module.exports = createUserProfiles;
