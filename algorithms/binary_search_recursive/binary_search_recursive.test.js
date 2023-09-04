const assert = require('assert');
const { binarySearchRecursive } = require('./binary_search_recursive');

assert.equal(binarySearchRecursive([1, 2, 3], 2), true);
assert.equal(binarySearchRecursive([1, 2, 3], 3), true);
assert.equal(binarySearchRecursive([1, 2, 3], 5), false);
assert.equal(binarySearchRecursive([1, 2, 3], 0), false);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 3), true);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 2), true);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 5), false);
assert.equal(binarySearchRecursive([1, 2, 3, 4], 0), false);
console.log('Tests passed successfully');
