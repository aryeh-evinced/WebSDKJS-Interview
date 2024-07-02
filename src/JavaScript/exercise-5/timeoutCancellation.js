/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
    // TODO: Implement the cancellable function
}

// Utility function to run tests
function runTest(testName, fn, args, t, cancelTimeMs, expected) {
    console.log(`Running test: ${testName}`);
    const start = Date.now();
    const result = [];
    const cancelFn = cancellable((...params) => {
        const res = fn(...params);
        result.push({ time: Date.now() - start, returned: res });
    }, args, t);
    
    setTimeout(cancelFn, cancelTimeMs);

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Result:', result);
            console.log('Expected:', expected);
            console.log('Test passed:', JSON.stringify(result) === JSON.stringify(expected));
            console.log('---');
            resolve();
        }, Math.max(t, cancelTimeMs) + 50);
    });
}

// Test cases
async function runAllTests() {
    await runTest(
        "Test 1",
        (x) => x * 5,
        [2],
        20,
        50,
        [{"time": 20, "returned": 10}]
    );

    await runTest(
        "Test 2",
        (x) => x ** 2,
        [2],
        100,
        50,
        []
    );

    await runTest(
        "Test 3",
        (x1, x2) => x1 * x2,
        [2, 4],
        30,
        100,
        [{"time": 30, "returned": 8}]
    );

    // Additional test case
    await runTest(
        "Test 4",
        (x) => x + 5,
        [10],
        50,
        25,
        []
    );
}

// Run all tests
runAllTests().then(() => console.log("All tests completed."));