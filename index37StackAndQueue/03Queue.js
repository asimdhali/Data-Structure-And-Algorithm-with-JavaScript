// Queue Implementation, class 39
// Fifo(First in First Out)

class Queue{
    constructor(){
        this.arr = [];
    };

    // push
    push(value){
        this.arr.unshift(value);
        return this.arr;
    };

    // pop
    pop(){
        this.arr.pop();
        return this.arr;
    };

    peek(){
        return this.arr[this.arr.length-1];
    }
};
let queue = new Queue();

console.log(queue.push(10));
console.log(queue.push(15));
console.log(queue.push(25));
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.peek());