### Exercise 1: JSON Manipulation

Given the starting code snippet located at `/src/exercise1/jsonManipulation.js`, please complete the following tasks:

1. Open the file `/src/exercise-1/jsonManipulation.js` in your preferred code editor.

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

4. After implementing the functions, run the code using Node.js. You can do this by opening a terminal, navigating to the `/src/exercise-1/` directory, and running:
   ```
   node jsonManipulation.js
   ```

5. Verify that your implementation correctly handles the sample object and the circular reference object provided in the code.