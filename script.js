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
      if(this.length === 1){
        this.head = null;
        this.tail = null;
        this.length--;
      }
      else if(this.length > 1){
        let currNode = this.head;
        while(currNode.nextNode !== this.tail){
          currNode = currNode.nextNode
        }
        this.tail = currNode;
        currNode.nextNode = null;
        this.length--;
      }
    },

    contains(value) {
      if (this.length === 1){
        if(this.head.value === value){
          return true;
        }
      }
      else if(this.length > 1){
        let currNode = this.head;
        while(currNode !== this.tail){
          if(currNode.value === value){
            return true;
          }
          currNode = currNode.nextNode;
        }
      }
      return false;
    }
  }
}

let list = LinkedList()
list.append(5)
list.append(6)
list.append(9)
list.append(11)
console.log(list.contains(9))