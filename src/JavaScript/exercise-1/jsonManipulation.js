// Sample nested object
const sampleObject = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
      country: "USA"
    },
    hobbies: ["reading", "cycling", "photography"],
    family: {
      spouse: {
        name: "Jane Doe",
        age: 28
      },
      children: [
        {
          name: "Jimmy Doe",
          age: 5
        },
        {
          name: "Sally Doe",
          age: 3
        }
      ]
    }
  };
  
  // Function to convert object to JSON string
  function objectToJSON(obj) {
    // Implement this function
  }
  
  // Function to parse JSON string to object
  function JSONToObject(jsonString) {
    // Implement this function
  }
  
  // Function to handle circular references
  function handleCircularReferences(obj) {
    // Implement this function
  }
  
  // Test the functions
  console.log("Original object:", sampleObject);
  
  const jsonString = objectToJSON(sampleObject);
  console.log("JSON string:", jsonString);
  
  const parsedObject = JSONToObject(jsonString);
  console.log("Parsed object:", parsedObject);
  
  // Create an object with circular reference for testing
  const circularObject = {
    name: "Circular Object",
    self: null
  };
  circularObject.self = circularObject;
  
  console.log("Object with circular reference:", handleCircularReferences(circularObject));