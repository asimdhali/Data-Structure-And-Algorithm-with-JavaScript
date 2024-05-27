class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
// const node = new Node(10);
// node.next = new Node(11);
// node.prev = new Node(9);
// node.next.next = new Node(12);
// console.log(node);
// console.log(node.next);

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };
    push(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
        }
        return this;
    }
}
const list = new DoublyLinkedList();
list.push(10);
list.push(15);
console.log(list);