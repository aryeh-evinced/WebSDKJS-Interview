# Technical Questions

### Exercise 1: JSON Manipulation

Given the starting code snippet located at `/src/exercise1/jsonManipulation.js`, please complete the following tasks:

1. Open the file `/src/exercise1/jsonManipulation.js` in your preferred code editor.

2. You will find three function stubs:
   - `objectToJSON(obj)`
   - `JSONToObject(jsonString)`
   - `handleCircularReferences(obj)`

3. Implement these functions as follows:

   a) `objectToJSON(obj)`: 
      - Convert the given JavaScript object to a valid JSON string.
      - Use `JSON.stringify()`.
      - Include appropriate error handling.

   b) `JSONToObject(jsonString)`:
      - Parse the given JSON string back into a JavaScript object.
      - Use `JSON.parse()`.
      - Include appropriate error handling.

   c) `handleCircularReferences(obj)`:
      - Implement a solution to handle circular references in the object.
      - Explain your approach to dealing with circular references.

4. After implementing the functions, run the code using Node.js. You can do this by opening a terminal, navigating to the `/src/exercise1/` directory, and running:
   ```
   node jsonManipulation.js
   ```

5. Verify that your implementation correctly handles the sample object and the circular reference object provided in the code.


---


## Exercise 2: Deep Copy

Your task is to implement a JavaScript function called `deepCopy(obj)` that takes an object as input and returns a new object that is a deep copy of the original. You'll find a starting point for your code in the file `/src/exercise2/deepCopy.js`.

**Requirements:**

* The `deepCopy` function must be able to handle:
    * **Primitive Types:** Strings, numbers, booleans, null, undefined.
    * **Arrays:** Arrays of any length, containing any type of element.
    * **Objects:** Objects with any number of properties, including nested objects and arrays.
    * **Circular References:**  The function should gracefully handle objects that contain circular references (e.g., an object that references itself as a property).
- The returned copy must be a completely independent object from the original. Modifying the copy should not affect the original, and vice versa.
- The function should be efficient and avoid unnecessary copying of primitive values.
- You are not allowed to use any external libraries (e.g., Lodash) for this exercise.

**Tips:**

- Consider using recursion to handle nested objects and arrays.
- Think about how you might detect and handle circular references (e.g., using a `WeakMap` or `Set`).
- Write test cases to ensure your function works correctly with different types of input. 

---

## Exercise 3: Promise Pool

Given an array of asynchronous functions `functions` and a **pool limit** `n`, return an asynchronous function `promisePool`. It should return a promise that resolves when all the input functions resolve.

**Pool limit** is defined as the maximum number promises that can be pending at once. `promisePool` should begin execution of as many functions as possible and continue executing new functions when old promises resolve. `promisePool` should execute `functions[i]` then `functions[i + 1]` then `functions[i + 2]`, etc. When the last promise resolves, `promisePool` should also resolve.

For example, if `n = 1`, `promisePool` will execute one function at a time in series. However, if `n = 2`, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.

You can assume all `functions` never reject. It is acceptable for `promisePool` to return a promise that resolves any value.

### Example 1:

```javascript
Input: 
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 2
Output: [[300,400,500],500]
Explanation:
Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively.
They resolve at 300ms, 400ms, and 500ms respectively. The returned promise resolves at 500ms.
At t=0, the first 2 functions are executed. The pool size limit of 2 is reached.
At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2.
At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1.
At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.
```

### Example 2:

```javascript
Input:
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 5
Output: [[300,400,200],400]
Explanation:
The three input promises resolve at 300ms, 400ms, and 200ms respectively.
The returned promise resolves at 400ms.
At t=0, all 3 functions are executed. The pool limit of 5 is never met.
At t=200, the 3rd function resolves. Pool size is 2.
At t=300, the 1st function resolved. Pool size is 1.
At t=400, the 2nd function resolves. Pool size is 0, so the returned promise also resolves.
```

### Example 3:

```javascript
Input:
functions = [
  () => new Promise(res => setTimeout(res, 300)),
  () => new Promise(res => setTimeout(res, 400)),
  () => new Promise(res => setTimeout(res, 200))
]
n = 1
Output: [[300,700,900],900]
Explanation:
The three input promises resolve at 300ms, 700ms, and 900ms respectively.
The returned promise resolves at 900ms.
At t=0, the 1st function is executed. Pool size is 1.
At t=300, the 1st function resolves and the 2nd function is executed. Pool size is 1.
At t=700, the 2nd function resolves and the 3rd function is executed. Pool size is 1.
At t=900, the 3rd function resolves. Pool size is 0 so the returned promise resolves.
```

### Constraints:

* `0 <= functions.length <= 10`
* `1 <= n <= 10`


---

## Exercise 4: Flatten Deeply Nested Array

Given a multi-dimensional array `arr` and a depth `n`, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than `n`. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in `Array.flat` method.

### Example 1:

**Input**

```javascript
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0
```
**Output**

```javascript
[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
```

**Explanation**  
Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened. 

### Example 2:

**Input**

```javascript
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 1
```
**Output**

```javascript
[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
```

**Explanation**  
The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.

### Example 3:

**Input**
```javascript
arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
```
**Output**
```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
```

**Explanation**  
The maximum depth of any subarray is 1. Thus, all of them are flattened.

### Constraints:

- 0 <= count of numbers in arr <= 10^5
- 0 <= count of subarrays in arr <= 10^5
- maxDepth <= 1000
- -1000 <= each number <= 1000
- 0 <= n <= 1000
