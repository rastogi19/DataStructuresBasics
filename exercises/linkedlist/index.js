// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
        
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        
    }
    size() {
        let count = 0;
        let node = this.head;
        // console.log(this.head);
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getFirst() {
        // console.log(this.hesad.data);
        return this.head;
    }
    getLast() {
        
         let node = this.head ? this.head : null;
         while(node.next){
             node = node.next;
         }
         return node;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {
            return;
          }
      
        this.head = this.head.next;
    }

    removeLast() {
        let node = this.head;
        if(!this.head) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        while(node.next.next){
            node = node.next;
        }
        node.next = null;
    }
    insertLast(record) {
        let newNode = new Node(record);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let node = this.head;
        
        while(node.next){
            node = node.next;
        }
        node.next = newNode;
    }
    getAt(index) {
        // console.log(index,this.head);
        let node = this.head;
        let count = 0;
        while(node) {
            if(count === index) {
                return node;
            }
            node = node.next;
            count++;
            // console.log(count);
        }
        return null;
    }
    removeAt(index) {
        if(!this.head){
            return;
        }
        if(index === 0){
            this.head = this.head.next;
            return;
        }
        let node = this.getAt(index-1);
        if(!node || !node.next) {
            return;
        }
        node.next = node.next.next;

    }
    insertAt(record,index) {
        
        if(!this.head) {
            this.head = new Node(record);
            return;
        }
        if(index === 0) {
            this.insertFirst(record);
            return;
        }

        let node = this.getAt(index-1) || this.getLast();
        let newNode = new Node(record,node.next);
        node.next = newNode;
        
    }
    forEach(fn) {
        let node = this.head;
        while(node){
            fn.call(this,node);
            node = node.next;
        }
    }
    *[Symbol.iterator] () {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
