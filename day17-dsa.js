// LInked List
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

class LinkedList{
    constructor(){
        this.head = null;
    }
    insertAtHead( element){
        let newNode = new Node(element)

        if(this.head === null){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;    
        return;    
    }
    insertAtTail( element){
        const newNode = new Node(element);
        if(this.head === null){
            this.insertAtHead(element);
            return;
        }
        let currNode = this.head;
        while(currNode.next !== null){
            currNode = currNode.next;
        }
        currNode.next = newNode
        return;
    }
    printList(){
        let currNode = this.head;
        while(currNode!== null){
            console.log(`${currNode.value}->`);
            currNode = currNode.next;
        }
        console.log("Null");
    }
}


// const list = new LinkedList();
// list.insertAtHead(1);
// list.insertAtHead(2);
// list.insertAtTail(3)
// list.printList()


// NOTE: STACK

class Stack{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        if(this.items.isEmpty){
            return true;
        }
        else{
            return false;
        }
    }

    push(element){
        this.items.push(element);
        return;
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        this.items.pop();
        return;
    }
    peek(){

        let n = this.items.length;
        if( n===0){
            console.log("Stack is empty");
            return;
        }
        console.log(this.items[n-1]);
    }
}

// const stack1 = new Stack();
// stack1.push(2);
// stack1.push(3);
// stack1.push(4);
// stack1.peek();
// stack1.pop();
// stack1.peek();

// NOTE:Queue
class Queue{
    constructor(){
        this.items = []
    }
    isEmpty(){
        if(this.items.length === 0){
            return true;
        }
        else{
            return false;
        }
    }
    enQueue(element){
        this.items.push(element);
    }
    deQueue(){
        if(this.isEmpty()){
            console.log('queue is empty');
            return;
        }
        this.items.shift();
        return;
    }
    front(){
        if(this.isEmpty()){
            console.log('queue is empty');
            return;
        }
        console.log(this.items[0]);
    }

}
// const q = new Queue();
// q.enQueue(1);
// q.enQueue(2);
// q.enQueue(3);
// q.front();
// q.deQueue();
// q.front()


// NOTE: Tree

class TreeNode{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    addValue(element){
        const newNode = new TreeNode(element);
        if(this.root === null){

            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }
            else{
                this.insertNode(node.right, newNode);
            }
        }

    }
    printTree() {
        this.inOrderTraversal(this.root);
        console.log(); // For new line after printing the tree
      }
    inOrderTraversal(node){
        if(node!==null){
            this.inOrderTraversal(node.left);
            process.stdout.write(`${node.value} `);
            this.inOrderTraversal(node.right);
        }
    }
}
// const tree = new BinaryTree();
// tree.addValue(5);
// tree.addValue(3);
// tree.addValue(7);
// tree.addValue(2);
// tree.addValue(4);
// tree.addValue(6);
// tree.addValue(8);

// tree.printTree()


class Graph{
    constructor(){
        this.adjacencyList = new Map()

    }
    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex, []); // vertex and its edges with other vertexin array
        }
      
    }
    addEdge(vertex1, vertex2){
        if(!this.adjacencyList.has(vertex) || !this.adjacencyList.has(vertex2)){
            console.log("Vertex must exists");
        }
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    bfs(startVertex){
        if(!this.adjacencyList.has(startVertext)){
            console.log("Start vertex must exists");
        }
        const visited = new Set();
        const queue = []
        const result = []
        visited.add(startVertex);
        queue.push(startVertex);

        while(queue.length >0){
            const vertex = queue.shift()
            result.push(vertex);
            for(const neighbor of this.adjacencyList.get(vertex)){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor)
                }
            }
        }
        return result;
    }
    
}