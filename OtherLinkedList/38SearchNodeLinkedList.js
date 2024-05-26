// Search Node in Linked List, class 38 "Code Step By Step"
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
            // console.log(currentNode);
            // currentNode =  counter.next;
            currentNode =  currentNode.next;
            counter++;

            // console.log(counter) // show to 1 to 6 
        }
    };
    deleteNode(index){
        let counter = 1;
        let lead = this.head;
        if(index === 1){
            this.head = this.head.next;
        }else{
            while(counter < index -1){
                lead = lead.next;
                counter++;
            }
            let nextNode = lead.next.next;
            lead.next = nextNode;
            console.log(lead);
        }
    }
    insertNode(index, value){
        let counter = 1;
        let currentNode = this.head;
        while(counter > index){
            counter++;
            currentNode = currentNode.next;
        }
        let nextNode = currentNode.next;
        currentNode.next = {
            value: value,
            next: nextNode
        }
    }
    searchNode(data){
        let result = undefined;
        let lead = this.head;
        let loop = true;
        // let counter = 1;
        while(loop){
            lead = lead.next;
            loop = !!lead;
            // console.log(lead);
            if(loop && lead.value === data){
                loop = false;
                result = lead;
            }
        };
        console.log(result)

        // while(counter<4){
        // while(counter<6){
        //     lead = lead.next;
        //     console.log(lead);
        //     counter++;

        // };
    }
}
let list = new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.appendNode(700);
list.traversing();
// list.deleteNode(4);
// list.deleteNode(2);
// list.deleteNode(3);
list.deleteNode(1);
// console.log(list)

// list.insertNode(2, 4000);
// console.log(list)

list.searchNode(500);
// list.searchNode(600);
// list.searchNode(900);