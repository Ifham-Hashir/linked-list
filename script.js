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

    size() {
      return this.length;
    },

  }
}

let list = LinkedList()
list.append(8)
list.append(10)
list.append(15)
console.log(list)


