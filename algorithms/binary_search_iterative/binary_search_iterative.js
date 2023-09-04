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

module.exports = { binarySearchIterative }
