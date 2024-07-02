## Exercise 2: Deep Copy

Open the file `/src/exercise-2/jsonManipulation.js` in your preferred code editor.

Your task is to implement a JavaScript function called `deepCopy(obj)` that takes an object as input and returns a new object that is a deep copy of the original. 

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

