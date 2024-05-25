class List{
    constructor(data){
        this.head = {
            value: data,
            next: null
        };
        this.tail = this.head;
        this.size =1;
    }
    appendNode(nodeData){
        let newNode = {
            value: nodeData,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size+=1;
    };
    traversing(){
        let counter = 0;
        let currentNode = this.head;
        while(counter < this.size){
            // console.log(counter) // show - 0 to 5
            console.log(currentNode);
            // currentNode =  counter.next;
            currentNode =  currentNode.next;
            counter++;

            // console.log(counter) // show to 1 to 6 
        }
    }
}
let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.appendNode(700);
list.traversing();
// console.log(list)