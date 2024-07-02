// Task: Implement a function deepCopy(obj) that creates a deep copy of a JavaScript object.

function deepCopy(obj) {
    return "";
}

// Test Case
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copied = deepCopy(original);

console.log(copied);  // Should log the deep copy
console.log(copied === original); // Should be false (different objects)
console.log(copied.b === original.b); // Should be false (different objects)
