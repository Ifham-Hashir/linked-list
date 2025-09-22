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

  }
}

let list = LinkedList()
list.append(4)
list.append(5)
list.prepend(3)
console.log(list)
list.pop()
console.log(list)



