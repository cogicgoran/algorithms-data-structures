const assert = require('assert');

/**
 * 
 * @param {Array} array
 * @description Sorts list in ascending order
 * @returns New sorted list
 */
function mergeSort(array) {
    // Divide: Find the midpoint of the list and divide into sublists
    // Conquer: Recursively sort the sublists created in the previous step
    // Combine: Merge the sorted sublists created in previous step
    if (array.length <= 1) {
        return array;
    }
    const [leftHalf, rightHalf] = split(array);
    const left = mergeSort(leftHalf);
    const right = mergeSort(rightHalf);

    return merge(left, right);
}

/**
 * 
 * @param {Array} left 
 * @param {Array} right
 * @description Mges two lists, sorting them in the process
 * @returns  Sorted array
 */
function merge(left, right) {
    let l = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            l.push(right[j]);
            j++;
            continue;
        }
        if (left[i] < right[j]) {
            l.push(left[i]);
            i++;
            continue;
        }
        if (left[i] === right[j]) {
            l.push(left[i], right[j]);
            i++;
            j++;
            continue;
        }
    }
    while (i < left.length) {
        l.push(left[i]);
        i++;
    }
    while (j < right.length) {
        l.push(right[j]);
        j++;
    }
    return l;
}

/**
 * 
 * @param {Array} array
 * @description Splits list into two lists by a midpoint
 * @returns Array containting 2 sublists
 */
function split(array) {
    const midpoint = Math.floor(array.length / 2);
    return [array.slice(0, midpoint), array.slice(midpoint)];
}

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