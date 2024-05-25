// Stack  data Structure implentation, class 37
// lifo(Last in First Out)
class Stack {
    constructor(){
        // return this; // this is object here
        // console.log(this)
        this.arr = [];
    };

    // push
    added(value){
        this.arr.push(value);
        return this.arr;
    }

    // pop
    pop(){
        this.arr.pop();
        return this.arr;
    }

    lookUp(){
        return this.arr[this.arr.length-1];
    }
};
let stack = new Stack();
// console.log(stack);
// console.log(stack.added(5));
// console.log(stack.added(10));
// console.log(stack.added(15));
// console.log(stack.lookUp());

// console.log(stack.pop());
// console.log(stack.pop());

// let obj = {
//     name: "rafi",
//     roll: 23,
// }

// obj.channelName = "EveIsCode";
// console.log(obj)


// let arr = [0,3,4,12];
// // console.log(arr.length);
// console.log(arr[arr.length-1]);