// Singly Linked List Implementation
class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
};
// let firstNode = new Node("First");
let firstNode = new Node();
// console.log(firstNode);


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
        // let newNode = {
        //     value: value,
        //     next: null
        // };
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    pop(){
        if(!this.head){
            return null;
        }
        if(this.length === 1){
            let removeNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removeNode;
        }
        let currentNode = this.head;
        let lastNode = this.tail;
        let newLastNode;
        while(currentNode){
            if(currentNode.next == this.tail){
                newLastNode = currentNode;
                break;
            }
            currentNode = currentNode.next;
        }
        newLastNode.next = null;
        this.tail = newLastNode;
        this.length--;
        return lastNode
    }
    shift(){
        if(!this.head){
            return null;
        };
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentNode;
    }
    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }
};

let list = new SinglyLinkedList();
list.push(10);
list.push("Hello");
list.shift();
list.shift();
list.unshift(120);
list.unshift(140);
console.log(list)