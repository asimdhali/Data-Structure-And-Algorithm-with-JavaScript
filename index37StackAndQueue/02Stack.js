// Stack Implementation with javascript object, class 38
class AnotherStack{
    constructor(){
        this.database = {};
        this.count = 0;
    }

    push(value){
        this.count++;
        this.database[this.count] =  value;
        return this.database;
    }

    pop(){
        let deleteItem = this.database[this.count];
        delete this.database[this.count];
        this.count--;
        return deleteItem;
    }

    peek(){
        return this.database[this.count];
    }
};
let stack = new AnotherStack();
console.log(stack)
console.log(stack.push(10));
console.log(stack.push(12));

console.log(stack.pop());
console.log(stack.peek());




// let obj = {
//     "1": 15,
//     "2": 20,
// }

// obj[4] = 50;
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj[3]);
// console.log(obj[4]);

// console.log(obj);