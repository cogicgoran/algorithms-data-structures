function linearSearch(array, target) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === target) {
            return index;
        }
    }
    return -1;
}

function verify(array, target) {
    const foundIndex = linearSearch(array, target);
    if (foundIndex === -1) {
        console.log('Target not found');
    } else {
        console.log(`Target found on index '${foundIndex}'`);
    }
}

verify([1, 2, 3, 4, 5, 6, 7, 8], 12);
verify([1, 2, 3, 4, 5, 6, 7, 8], 5);
verify([1, 2, 3, 4, 5, 6, 7, 8], -22);