function node(value) {
  return {
    value,
    nextNode: null,
  }
}

function linkedList() {
  return {
    head: null,
    tail: null,
    size: 0,
    append(value) {
      const newNode = node(value);

      if (this.head === null){
        this.head = newNode;
        this.tail = newNode;
        this.size++;
        return newNode;
      }

      this.tail.nextNode = newNode;
      this.tail = newNode;
      this.size++;
      return newNode;
    },
    prepend(value) {
      const newNode = node(value);

        if (this.head === null){
        this.head = newNode;
        this.tail = newNode;
        this.size++;
        return newNode;
      }

      newNode.nextNode = this.head
      this.head = newNode;
      this.size++;
      return newNode;
    },
    at(index) {
      let currentNode = this.head;
      let counter = 0;
      while(currentNode !== null){
        if(counter === index){
          return currentNode;
        }
        currentNode = currentNode.nextNode;
        counter++;
      }
      return null;
    },
    pop() {
      if(this.size === 0){
        return null;
      }
      const node = this.tail;

      if(this.head === this.tail){
        this.head = null;
        this.tail = null;
        this.size--;
        return node;
      }
      let currentNode = this.head;
      while(currentNode){
        if(currentNode.nextNode.nextNode === null){
          currentNode.nextNode = null;
          this.tail = currentNode;
          this.size--;
          return node;
        }
        currentNode = currentNode.nextNode;
      }
    },
    contains(value){
      if(this.size === 0){
        return false;
      }

      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === value){
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    },
    find(value){
      if(this.size === 0){
        return null;
      }
      let currentNode = this.head;
      let index = 0;
      while(currentNode){
        if(currentNode.value === value){
          return index;
        }
        currentNode = currentNode.nextNode;
        index++;
      }
      return null;
    },
    toString() {
      let string = ""
      let currentNode = this.head;
      while(currentNode){
        string += `(${currentNode.value}) -> `
        currentNode = currentNode.nextNode;
      }
      string += "null";
      return string;
    }
  }
}

// example uses class syntax - adjust as necessary
const list = linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())
