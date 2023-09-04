const { LinkedList } = require('../../data-structures/linked-list/linked-list');

/**
 * 
 * @param {LinkedList} linkedList
 * @description Sorts a linked list in ascending order
 * @returns Sorted linked list 
 */
function mergeSortLinkedLists(linkedList) {
    if (linkedList.size() <= 1) {
        return linkedList;
    }

    const [leftHalf, rightHalf] = split(linkedList);
    const left = mergeSortLinkedLists(leftHalf);
    const right = mergeSortLinkedLists(rightHalf);

    return merge(left, right);
}


/**
 * 
 * @param {LinkedList} linkedList
 * @description Divinde the unsorted list at midpoint into sublists
 * @returns Array containing two sublists from provided linked list 
 */
function split(linkedList) {
    if (!linkedList || !linkedList.head) {
        const leftHalf = linkedList;
        const rightHalf = null;
        return [leftHalf, rightHalf];
    } else {
        const size = linkedList.size();
        const midpoint = Math.floor(size / 2);
        const midNode = linkedList.nodeAtIndex(midpoint - 1);

        const leftHalf = linkedList;
        const rightHalf = new LinkedList();
        rightHalf.head = midNode?.nextNode ?? null;
        midNode.nextNode = null;
        return [leftHalf, rightHalf];
    }
}

/**
 * 
 * @param {LinkedList} left 
 * @param {LinkedList} right
 * @description Merges two linked lists, sorting by data in nodes
 * @returns new merged list 
 */
function merge(left, right) {
    const merged = new LinkedList();
    // Add a fake head that is discarded lates
    merged.append(0);

    let current = merged.head;
    while (left.head || right.head) {
        if (!left.head) {
            current.nextNode = right.head;
            right.head = right.head.nextNode;
            break;
        }
        if (!right.head) {
            current.nextNode = left.head;
            left.head = left.head.nextNode;
            break;
        }
        if (left.head.data > right.head.data) {
            merged.append(right.head.data);
            current = current.nextNode;
            right.head = right.head.nextNode
            continue;
        }
        if (left.head.data < right.head.data) {
            merged.append(left.head.data);
            current = current.nextNode;
            left.head = left.head.nextNode;
            continue;
        }
        if (left.head.data === right.head.data) {
            merged.append(right.head.data);
            current = current.nextNode;
            right.head = right.head.nextNode;
            merged.append(left.head.data);
            current = current.nextNode;
            left.head = left.head.nextNode;
        }
    }
    // Discard fake head;
    merged.head = merged.head.nextNode;
    return merged;
}

module.exports = { mergeSortLinkedLists };
