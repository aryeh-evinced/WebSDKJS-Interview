/**
 * @param {any[]} arr
 * @param {number} n
 * @return {any[]}
 */
function flat(arr, n) {
    // TODO: Implement the flat function
}

// Utility function to compare arrays (including nested arrays)
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!arraysEqual(arr1[i], arr2[i])) return false;
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Test cases
function runTestCase(arr, n, expected, caseNumber) {
    console.log(`Running test case ${caseNumber}:`);
    console.log(`Input array: ${JSON.stringify(arr)}`);
    console.log(`Depth n: ${n}`);
    const result = flat(arr, n);
    console.log(`Output: ${JSON.stringify(result)}`);
    console.log(`Expected: ${JSON.stringify(expected)}`);
    console.log(`Test ${arraysEqual(result, expected) ? 'PASSED' : 'FAILED'}`);
    console.log('---');
}

// Test case 1
const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const expected1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
runTestCase(arr1, 0, expected1, 1);

// Test case 2
const arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const expected2 = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];
runTestCase(arr2, 1, expected2, 2);

// Test case 3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const expected3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
runTestCase(arr3, 2, expected3, 3);

// Additional test case
const arr4 = [1, [2, [3, [4, [5]]]]];
const expected4 = [1, 2, 3, [4, [5]]];
runTestCase(arr4, 2, expected4, 4);

console.log("Please implement the flat function and run this file to test your solution.");