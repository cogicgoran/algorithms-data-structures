const assert = require('assert');
const { mergeSort } = require('./merge_sort');

assert.deepEqual(mergeSort([]), []);
assert.deepEqual(mergeSort([0]), [0]);
assert.deepEqual(mergeSort([1, 2]), [1, 2]);
assert.deepEqual(mergeSort([2, 1]), [1, 2]);
assert.deepEqual(mergeSort([1, 2, 3]), [1, 2, 3]);
assert.deepEqual(mergeSort([3, 2, 1]), [1, 2, 3]);
assert.deepEqual(mergeSort([2, 3, 1]), [1, 2, 3]);
assert.deepEqual(mergeSort([1, 2, 3, 4]), [1, 2, 3, 4]);
assert.deepEqual(mergeSort([4, 3, 2, 1]), [1, 2, 3, 4]);
assert.deepEqual(mergeSort([3, 2, 4, 1]), [1, 2, 3, 4]);
console.log('Tests passed successfuly');