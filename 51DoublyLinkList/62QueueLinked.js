class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    };
    enqueue(value){
        // Fifo
        let newPerson = new Node(value);
        if(!this.first){
            this.first = newPerson;
            this.last = newPerson;
        }else{
            this.last.next = newPerson;
            this.last = newPerson;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
};
let myQueue = new Queue();
console.log(myQueue.enqueue("rafi"));
console.log(myQueue.enqueue("rakib"));
console.log(myQueue.enqueue("tasib"));
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());