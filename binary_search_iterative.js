const assert = require('assert');

function binarySearchIterative(array, target) {
    let start = 0;
    let end = array.length;
    let midpoint;
    while (start < end) {
        midpoint = Math.floor((start + end) / 2);
        if (array[midpoint] === target) {
            return midpoint;
        }
        if (array[midpoint] > target) {
            end = midpoint
        }
        if (array[midpoint] < target) {
            start = midpoint + 1;
        }
    }
    return -1;
}


assert.equal(binarySearchIterative([1, 2, 3], 2), 1);
assert.equal(binarySearchIterative([1, 2, 3], 3), 2);
assert.equal(binarySearchIterative([1, 2, 3], 5), -1);
assert.equal(binarySearchIterative([1, 2, 3, 4], 3), 2);
assert.equal(binarySearchIterative([1, 2, 3, 4], 2), 1);
assert.equal(binarySearchIterative([1, 2, 3, 4], 5), -1);
assert.equal(binarySearchIterative([1, 2, 3, 4], 0), -1);
console.log('Tests passed successfully');