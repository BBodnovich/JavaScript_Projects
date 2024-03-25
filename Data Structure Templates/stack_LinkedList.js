class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.top = null
        this.bottom = null;
        this.count = 0
    }


    push(value) {
        const newNode = new Node(value);
        if (this.count === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode
        }

        this.count ++;
        return this.count;
    }


    pop() {
        if (this.count === 0) return undefined;

        const topNode = this.top
        this.top = this.top.next;
        topNode.next = null;

        this.count --;
        return topNode.value;
    }


    peek() {
        return this.top;
    }


    length() {
        return this.count;
    }


    isEmpty() {
        return (this.count === 0);
    }


    lookup(index) {
        if (index < 0 || index >= this.count) {
            return undefined;
        }

        let currentNode = this.top;
        let currentIndex = this.count - 1;

        while (currentIndex > index) {
            currentNode = currentNode.next;
            currentIndex--;
        }

        return currentNode;
    }
}