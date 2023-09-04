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

module.exports = { binarySearchRecursive };
