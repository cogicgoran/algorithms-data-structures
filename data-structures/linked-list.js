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

    isEmpty() {
        return !this.head instanceof Node;
    }

    removeAt(removeAtIndex) {
        if (this.isEmpty()) {
            return null;
        }
        let currentIndex = 0;
        let current = this.head;
        let previous;
        while (current) {
            if (removeAtIndex === 0) {
                const nodeToRemove = current;
                this.head = nodeToRemove.nextNode;
                return nodeToRemove;
            }
            if (currentIndex === removeAtIndex) {
                const nodeToRemove = current;
                previous.nextNode = nodeToRemove.nextNode;
                return nodeToRemove;
            }
            currentIndex++;
            previous = current;
            current = current.nextNode;
        }
        return null;
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

    toString() {
        return `<Node data:${this.data}>`
    }
}


try {
    assert.equal(new Node(5).data, 5);
    assert.equal(new LinkedList().head, null);
    (() => {
        const linkedList = new LinkedList();
        assert.equal(linkedList.search(3), null);
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(3);
        assert.deepEqual(linkedList.search(3), { data: 3, nextNode: null });
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(3);
        linkedList.append(5);
        const node = linkedList.search(5);
        assert.deepEqual(node instanceof Node, true);
        assert.equal(node.toString(), '<Node data:5>');
    })();
    (() => {
        const linkedList = new LinkedList();
        linkedList.append(1);
        linkedList.append(2);
        linkedList.append(3);
        assert.equal(linkedList.search(2).data, 2);
        const removed = linkedList.removeAt(1);
        assert.equal(removed, '<Node data:2>');
        assert.equal(linkedList.search(2), null);
        assert.notEqual(linkedList.search(3), null);
        assert.notEqual(linkedList.search(1), null);
    })();
    console.log('Tests passed successfully');
} catch (error) {
    console.log(error);
    console.log('Tests failed');
}