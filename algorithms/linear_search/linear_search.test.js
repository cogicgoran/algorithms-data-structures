const assert = require('assert');
const { linearSearch } = require('./linear_search');

assert.equal(linearSearch([1, 2, 3], 2), 1);
assert.equal(linearSearch([1, 2, 3], 3), 2);
assert.equal(linearSearch([1, 2, 3], 5), -1);
assert.equal(linearSearch([1, 2, 3, 4], 3), 2);
assert.equal(linearSearch([1, 2, 3, 4], 2), 1);
assert.equal(linearSearch([1, 2, 3, 4], 5), -1);
assert.equal(linearSearch([1, 2, 3, 4], 0), -1);
console.log('Tests passed successfully');
