function Node(value = null, nextNode = null) {
  return {value, nextNode}
}

function LinkedList(){
  return {
    head: null,
    tail: null,
    length: 0,
    append(value) {
      let newNode = Node(value);
      if (this.length === 0){
        this.head = newNode;
      }
      else{
        this.tail.nextNode = newNode;
      }
      this.tail = newNode;
      this.length++;
    },

    prepend(value) {
      let newNode = Node(value, this.head);
      this.head = newNode;
      if(this.length === 0){
        this.tail = newNode;
      }
      this.length++;
    },

    size() {
      return this.length;
    },

    at(index) {
      let currIndex = 0;
      let currNode = this.head;
      if (index < this.length && index >= 0){
        while(currIndex < index){
          currNode = currNode.nextNode;
          currIndex++;
        }
        return currNode;
      }
      return null;
    },

    pop(){
      if (this.length === 0){
        return;
      }
      else if(this.length === 1){
        this.head = null;
        this.tail = null;
      }
      else{
        let currNode = this.head;
        while(currNode.nextNode !== this.tail){
          currNode = currNode.nextNode
        }
        this.tail = currNode;
        currNode.nextNode = null;
      }
      this.length--;
    },

    contains(value) {
      let currNode = this.head;
      while (currNode !== null) {
        if(currNode.value === value){
          return true;
        }
        currNode = currNode.nextNode;
      }
      return false;
    },

    find(value) {
      let currNode = this.head;
      let currIndex = 0;
      while (currIndex !== this.length) {
        if(currNode.value === value){
          return currIndex;
        }
        currNode = currNode.nextNode;
        currIndex++;
      }
      return null;
    },

    toString(){
      let currNode = this.head;
      let string = "";
      while(currNode !== null){
        string += `(${currNode.value}) -> `;
        currNode = currNode.nextNode;
      }
      string += "null";
      return string;
    },

    insertAt(value, index) {
      // For index out of bounds
      if(index > this.length || index < 0){
        return;
      }
      // For inserting node at first index
      else if(index === 0){
        let newNode = Node(value, this.head)
        this.head = newNode;
      }
      else{
        let currNode = this.head;
        let currIndex = 0;
        while (currIndex !== this.length) {
          if(currIndex === index-1){
            let newNode = Node(value, currNode.nextNode)
            currNode.nextNode = newNode;
            //If the node inserted at the last index
            if(index === this.length){
              this.tail = newNode;
            }  
            break;
          }
          currNode = currNode.nextNode;
          currIndex++;
        }
      }
      this.length++;
    },

    removeAt(index){
      // For index out of bounds
      if(index >= this.length || index < 0){
        return;
      }
      else if(index === 0){
        if(this.head === this.tail){
          this.tail = this.tail.nextNode;
        }
        this.head = this.head.nextNode;
      }
      else{
        let currNode = this.head;
        let currIndex = 0;
        while (currIndex !== this.length) {
          if(currIndex === index-1){
            currNode.nextNode = currNode.nextNode.nextNode;
            if(index === this.length){
              this.tail = currNode;
            }  
            break;
          }
          currNode = currNode.nextNode;
          currIndex++;
        }
      }
      this.length--;
    }
  }
}


const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.removeAt(0);
console.log(list.head);
console.log(list.tail);