// browser e console e giye dekhte hobe
// class expression
// const Datastructure = class{

// };
// let ds = new Datastructure();
// console.log(ds)

// class declaration
// class Datastructure{

// };
// let ds = new Datastructure();
// console.log(ds);


// class declaration
class Datastructure{
    constructor(name, age){
        // console.log(this)
        this.name = name;
        this.age = age;
        this.storage = [];
    };
    
    insert(value){
        this.storage.push(value);
        return this.storage;
    };
};
let ds = new Datastructure("linked-list", 20);
console.log(ds.insert(20));
console.log(ds.insert(23));
console.log(ds.insert(26));
console.log(ds.insert(28));
console.log(ds.insert(29));
console.log(ds);

// let obj = {
//     name : "rafi",
//     age : 10,
// }
// obj.passion = "programming";
// console.log(obj)
