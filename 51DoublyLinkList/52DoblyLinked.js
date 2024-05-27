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
    }
}
const list = new DoublyLinkedList();
console.log(list);