function linearSearch(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return index;
        }
    }
    return -1;
}

module.exports = { linearSearch };
