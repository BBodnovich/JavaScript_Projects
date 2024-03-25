class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.count = 0
    }


    enqueue(value) {
        const newNode = new Node(value);

        if (this.count === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.count ++;
        return this.count;
    }


    dequeue() {
        if (!this.first) {
            return null;
        }

        if (this.count === 1) {
            this.first = null;
            this.last = null;
            this.count --;
            return this.count;
        }

        this.first = this.first.next;
        this.count --;
        return this.count;
    }


    peek() {
        return this.first;
    }


    length() {
        return this.count;
    }


    isEmpty() {
        return (this.count === 0);
    }


    lookup(index) {
        if (this.count === 0) return null;

        let currentNode = this.first
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}