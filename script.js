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

console.log(list.toString());