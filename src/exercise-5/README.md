# Exercise 5: Timeout Cancellation

## Problem Description

Implement a function `cancellable` that takes a function `fn`, an array of arguments `args`, and a timeout `t` in milliseconds. The function should return a cancel function `cancelFn`.

The `cancellable` function should work as follows:

1. The execution of the function `fn` should be delayed by `t` milliseconds.
2. If the returned `cancelFn` is invoked before the delay of `t` milliseconds, it should cancel the delayed execution of `fn`.
3. If `cancelFn` is not invoked within the specified delay `t`, `fn` should be executed with the provided `args` as arguments.

## Function Signature

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
function cancellable(fn, args, t) {
    // Your implementation here
}
```

## Examples

### Example 1:

```javascript
Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]

const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);
```

Explanation: The cancellation was scheduled to occur after a delay of 50ms, which happened after the execution of fn(2) at 20ms.

### Example 2:

```javascript
Input: fn = (x) => x**2, args = [2], t = 100
Output: []

const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x**2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);
```

Explanation: The cancellation was scheduled to occur after a delay of 50ms, which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

### Example 3:

```javascript
Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
Output: [{"time": 30, "returned": 8}]

const cancelTimeMs = 100;
const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
setTimeout(cancelFn, cancelTimeMs);
```

Explanation: The cancellation was scheduled to occur after a delay of 100ms, which happened after the execution of fn(2,4) at 30ms.

## Constraints

- `fn` is a function
- `args` is a valid JSON array
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelTimeMs <= 1000`

## Task

1. Implement the `cancellable` function in the provided `timeoutCancellation.js` file.
2. Ensure your implementation passes all the provided test cases.
3. Consider edge cases and handle them appropriately.

## Submission

After completing the implementation:

1. Commit your changes:
   ```
   git add timeoutCancellation.js
   git commit -m "Implement timeout cancellation function"
   ```
2. Push to your branch:
   ```
   git push origin your-branch-name
   ```

Good luck!