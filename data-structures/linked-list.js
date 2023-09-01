const assert = require('assert');

class LinkedList {
    head = null;

    constructor() { }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode;
            };
            current.nextNode = newNode;
        }
    }

    prepend(data) {
        const newNode = new Node(data, this.head);
        this.head = newNode;
    }

    insertAt(data, index) {
        const newNode = new Node(data);
        const previousNode = this.head;
        let position = 0;
        if (!this.head) {
            this.head = newNode;
            return this;
        }
        let current = this.head;
        while (current) {
            if (index === position) {
                newNode.nextNode = current;
                return this;
            }
            position++;
            previousNode = current;
            current = current.nextNode;
        }
        previousNode.nextNode = newNode;
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.nextNode;
        }
        return null;
    }
}

class Node {
    data;
    nextNode;

    constructor(data, nextNode = null) {
        this.data = data;
        this.nextNode = nextNode;
    }
}


try {
    assert.equal(new Node(5).data, 5);
    assert.equal(new LinkedList().head, null);
    (() => {
        const linkedList = new LinkedList();
        assert.equal(linkedList.search(3), null)
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(3);
        assert.deepEqual(linkedList.search(3), { data: 3, nextNode: null })
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(3);
        linkedList.append(5);
        assert.deepEqual(linkedList.search(5), { data: 5, nextNode: null })
    })();
    console.log('Tests passed successfully');
} catch (error) {
    console.log(error);
    console.log('Tests failed');
}