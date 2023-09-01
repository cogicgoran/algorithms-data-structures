const assert = require('assert');

function binarySearchRecursive(array, target) {
    const midpoint = Math.floor(array.length / 2);
    if (array.length === 0) {
        return false;
    }
    if (array[midpoint] === target) {
        return true;
    }
    if (array[midpoint] > target) {
        return binarySearchRecursive(array.slice(0, midpoint), target);
    }
    if (array[midpoint] < target) {
        return binarySearchRecursive(array.slice(midpoint + 1), target);
    }
}


assert.equal(binarySearchRecursive([1, 2, 3], 2), true);
assert.equal(binarySearchRecursive([1, 2, 3], 3), true);
assert.equal(binarySearchRecursive([1, 2, 3], 5), false);
assert.equal(binarySearchRecursive([1, 2, 3], 0), false);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 3), true);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 2), true);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 5), false);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 0), false);
console.log('Tests passed successfully');