class Node{
    constructor(value){
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
};
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    addChild(value){
        if(this.root === null){
            this.root = new Node(value);
            return 
        }else{
            let currentNode = this.root;
            let added = false;
            while(!added && currentNode){
                if(currentNode.value === value){
                    console.log("Duplicated node not allowed")
                    return "Duplicated node not allowed"
                };
                if(value < currentNode.value){
                    // Going to left
                    if(currentNode.leftChild === null){
                        currentNode.leftChild = new Node(value);
                        added = true;
                    }else{
                        currentNode = currentNode.leftChild;
                    }
                }else if(value > currentNode.value){
                    // Going to right
                    if(currentNode.rightChild === null){
                        currentNode.rightChild = new Node(value);
                        added = true;
                    }else{
                        currentNode = currentNode.rightChild;
                    }
                }
            }
        }
    }
};
const BST = new BinarySearchTree();
BST.addChild(12);
// BST.addChild(12); // Duplicated node not allowed
BST.addChild(10);
BST.addChild(8); // leftchild e jabe
BST.addChild(14); //rightside e jabe
BST.addChild(16); //rightside e jabe
console.log(BST);