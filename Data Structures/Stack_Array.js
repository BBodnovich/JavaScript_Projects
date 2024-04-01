class Stack {
    constructor() {
        this.array = [];
        this.count = 0;
    }
    
    
    push(value) {
        this.array.push(value);
        this.count ++;
        return this;
    }
    
    
    pop() {
        if (this.count === 0) {
            return undefined
        }
        this.array.pop();
        this.count --;
        return this;
    }
    
    
    peek() {
        if (this.count === 0) {
            return undefined;
        }
        return this.array[this.array.length -1];
    }
    
    
    length() {
        return this.count;
    }
    
    
    isEmpty() {
        return this.count === 0;
    }
    
    
    lookup(index) {
        return this.array[index]
    }
}