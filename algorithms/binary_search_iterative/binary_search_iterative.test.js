const assert = require('assert');
const { binarySearchIterative } = require('./binary_search_iterative');

assert.equal(binarySearchIterative([1, 2, 3], 2), 1);
assert.equal(binarySearchIterative([1, 2, 3], 3), 2);
assert.equal(binarySearchIterative([1, 2, 3], 5), -1);
assert.equal(binarySearchIterative([1, 2, 3, 4], 3), 2);
assert.equal(binarySearchIterative([1, 2, 3, 4], 2), 1);
assert.equal(binarySearchIterative([1, 2, 3, 4], 5), -1);
assert.equal(binarySearchIterative([1, 2, 3, 4], 0), -1);
console.log('Tests passed successfully');
