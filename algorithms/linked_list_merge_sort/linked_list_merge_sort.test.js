const assert = require('assert');
const { LinkedList } = require('../../data-structures/linked-list/linked-list');
const { mergeSortLinkedLists } = require('./linked_list_merge_sort');

try {
    (() => {
        const linkedList = new LinkedList();
        const mergedList = mergeSortLinkedLists(linkedList);
        assert.equal(mergedList.size(), 0)
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        const mergedList = mergeSortLinkedLists(linkedList);
        assert.equal(mergedList.size(), 1)
        assert.equal(mergedList.head.data, 1)
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(2);
        linkedList.append(1);
        const mergedList = mergeSortLinkedLists(linkedList);
        assert.equal(mergedList.size(), 2)
        assert.equal(mergedList.head.data, 1)
        assert.equal(mergedList.head.nextNode.data, 2)
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        const mergedList = mergeSortLinkedLists(linkedList);
        assert.equal(mergedList.size(), 2)
        assert.equal(mergedList.head.data, 1)
        assert.equal(mergedList.head.nextNode.data, 2)
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        const mergedList = mergeSortLinkedLists(linkedList);
        assert.equal(mergedList.size(), 3)
        assert.equal(mergedList.head.data, 1)
        assert.equal(mergedList.head.nextNode.data, 2)
        assert.equal(mergedList.head.nextNode.nextNode.data, 3)
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(3);
        linkedList.append(2);
        linkedList.append(1);
        const mergedList = mergeSortLinkedLists(linkedList);
        assert.equal(mergedList.size(), 3)
        assert.equal(mergedList.head.data, 1)
        assert.equal(mergedList.head.nextNode.data, 2)
        assert.equal(mergedList.head.nextNode.nextNode.data, 3)
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(2);
        linkedList.append(1);
        linkedList.append(4);
        linkedList.append(3);
        const mergedList = mergeSortLinkedLists(linkedList);
        assert.equal(mergedList.size(), 4)
        assert.equal(mergedList.head.data, 1)
        assert.equal(mergedList.head.nextNode.data, 2)
        assert.equal(mergedList.head.nextNode.nextNode.data, 3)
        assert.equal(mergedList.head.nextNode.nextNode.nextNode.data, 4)
    })();

    console.log('Tests passed successfully');
} catch (error) {
    console.log(error);
}