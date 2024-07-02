/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    // TODO: Implement the promisePool function
};

// Helper function to create a promise that resolves after a given time
function createPromise(time) {
    return () => new Promise(res => setTimeout(res, time));
}

// Test cases
async function runTestCase(functions, n, expectedOutput) {
    console.log(`Running test case with n = ${n}`);
    const start = Date.now();
    const result = await promisePool(functions, n);
    const end = Date.now();
    const actualTime = end - start;
    console.log(`Actual time: ${actualTime}ms`);
    console.log(`Expected output: ${JSON.stringify(expectedOutput)}`);
    console.log(`Actual result: ${JSON.stringify(result)}`);
    console.log(`Time matches expected: ${Math.abs(actualTime - expectedOutput[1]) < 50}`);
    console.log(`Result matches expected: ${JSON.stringify(result) === JSON.stringify(expectedOutput[0])}`);
    console.log('---');
}

// Test case 1
const functions1 = [
    createPromise(300),
    createPromise(400),
    createPromise(200)
];
runTestCase(functions1, 2, [[300,400,500],500]);

// Test case 2
const functions2 = [
    createPromise(300),
    createPromise(400),
    createPromise(200)
];
runTestCase(functions2, 5, [[300,400,200],400]);

// Test case 3
const functions3 = [
    createPromise(300),
    createPromise(400),
    createPromise(200)
];
runTestCase(functions3, 1, [[300,700,900],900]);

