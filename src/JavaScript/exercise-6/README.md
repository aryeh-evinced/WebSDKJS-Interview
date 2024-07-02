# EventEmitter Implementation

## Problem Description

Design an `EventEmitter` class that allows for subscribing to events and emitting them. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM.

The `EventEmitter` class should have the following two methods:

1. `subscribe(eventName: string, callback: Function)`: 
   - Takes two arguments: the name of an event as a string and a callback function.
   - The callback function will be called when the event is emitted.
   - Multiple listeners can subscribe to the same event.
   - When emitting an event with multiple callbacks, each should be called in the order of subscription.
   - Returns an object with an `unsubscribe` method that removes the callback from the list of subscriptions.

2. `emit(eventName: string, args?: any[])`:
   - Takes two arguments: the name of an event as a string and an optional array of arguments.
   - If there are no callbacks subscribed to the given event, return an empty array.
   - Otherwise, return an array of the results of all callback calls in the order they were subscribed.

## Function Signatures

```javascript
class EventEmitter {
  subscribe(eventName: string, callback: Function): { unsubscribe: Function }
  emit(eventName: string, args?: any[]): any[]
}
```

## Examples

### Example 1:

```javascript
const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], no callbacks are subscribed yet
emitter.subscribe("firstEvent", function cb1() { return 5; });
emitter.subscribe("firstEvent", function cb2() { return 6; });
emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2
```

### Example 2:

```javascript
const emitter = new EventEmitter();
emitter.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]
```

### Example 3:

```javascript
const emitter = new EventEmitter();
const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
sub.unsubscribe(); // undefined
emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions
```

### Example 4:

```javascript
const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", x => x + 1);
const sub2 = emitter.subscribe("firstEvent", x => x + 2);
sub1.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]); // [7]
```

## Constraints

- All test cases are valid (e.g., you don't need to handle scenarios when unsubscribing from a non-existing subscription).
- The `emit` method takes either 1 or 2 arguments.

## Task

1. Implement the `EventEmitter` class in the provided `eventEmitter.js` file.
2. Ensure your implementation passes all the provided test cases.
3. Consider edge cases and handle them appropriately.

