class EventEmitter {
    constructor() {
        // TODO: Initialize any necessary data structures
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // TODO: Implement subscription logic
        
        return {
            unsubscribe: () => {
                // TODO: Implement unsubscribe logic
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // TODO: Implement emit logic
    }
}

// Test cases
function runTest(testName, actions, values) {
    console.log(`Running test: ${testName}`);
    const emitter = new EventEmitter();
    const output = [];
    const subscriptions = [];

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const value = values[i];

        switch (action) {
            case 'subscribe':
                const sub = emitter.subscribe(value[0], eval(value[1]));
                subscriptions.push(sub);
                output.push(['subscribed']);
                break;
            case 'emit':
                output.push(['emitted', emitter.emit(value[0], value[1])]);
                break;
            case 'unsubscribe':
                output.push(['unsubscribed', subscriptions[value[0]].unsubscribe()]);
                break;
        }
    }

    console.log('Output:', output);
    console.log('---');
}

// Test cases
runTest('Test 1', 
    ["emit", "subscribe", "subscribe", "emit"], 
    [["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
);

runTest('Test 2',
    ["subscribe", "emit", "emit"],
    [["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]
);

runTest('Test 3',
    ["subscribe", "emit", "unsubscribe", "emit"],
    [["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]
);

runTest('Test 4',
    ["subscribe", "subscribe", "unsubscribe", "emit"],
    [["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]
);

console.log("All tests completed.");