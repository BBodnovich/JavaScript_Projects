class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }


    append(value) {
        const newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }

        this.length++;
        return this;
    }


    prepend(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const tempNode = this.head;
            this.head = newNode;
            this.head.next = tempNode;
        }

        this.length++;
        return this;

    }


    insert(index, value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (index === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let nodeAtIndex = this.getNodeAtIndex(index);
            newNode.next = nodeAtIndex.next;
            nodeAtIndex.next = newNode;
        }

        this.length++;
        return this;
    }


    remove(index) {
        let nodeAtIndex = this.getNodeAtIndex(index);
        let removedNode = nodeAtIndex.next;

        if (removedNode.next === null) {
            nodeAtIndex.next = null;
        } else {
            nodeAtIndex.next = removedNode.next;
        }
        this.length--;
        return this
    }


    lookup(index) {
        let targetNode = this.getNodeAtIndex(index);
        return  targetNode;
    }


    getNodeAtIndex(index) {
        let nodeAtIndex = this.head;
        for (let i = 0; i < index - 1; i++) {
            nodeAtIndex = nodeAtIndex.next;
        }

        return nodeAtIndex;
    }


    printList() {
        let counter = 0;
        let currentNode = this.head;
        let outputList = []

        while (counter < this.length) {
            outputList.push(currentNode.value);
            currentNode = currentNode.next;
            counter++;
        }

        console.log(outputList.join(' --> '));
    }
}