// Singly Linked List Implementation
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    };

    isEmpty(){
        return this.length === 0
    }

    push(value){
        let newNode = {
            value: value,
            next: null
        };
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
};
// 2->3->6->8
// H        T

let list = new SinglyLinkedList();
// console.log(list);
// console.log(list.isEmpty());
list.push(5);
list.push(10);
list.push(15);
// console.log(list)
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.head.next.next.next);
console.log(list.tail);
// console.log(list.isEmpty());