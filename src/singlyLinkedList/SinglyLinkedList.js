//https://codechacha.com/ko/singly-linked-list-java/

function NewNode(val) {
  this.val = (val === undefined ? 0 : val);
  this.next = null;
}

class SinglyLinkedList {
  constructor() {
    this.list = new NewNode();
  }

  addHead(val) {
    let node = new NewNode(val);
    if (this.list.val === 0) {
      this.list.val = node.val;
      return this.list;
    }

    let tempNode = this.list;

    this.list = node;

    this.list.next = tempNode;

    return this.list;
  }

  addTail(val) {
    let addNode = new NewNode(val);
    if (this.list === null) {
      this.list = addNode;
      return this.list;
    }
    
  /*  let temp = this.list;

    while(true) {
      if (temp.next === null) {
        temp.next = addNode;
        break;
      }
      temp = temp.next;
    }

    this.list = temp;*/
    let node = this.list;

    while(node.next) {
      node = node.next;
    }
    node.next = addNode;

console.log(this.list);
    return this.list;
  }

  getIndexData(val) {
    if (this.list === null) return false;

    let listData = this.list;
    let count = 0;

    while (true) {
      count += 1;

      if (count === val) return listData.val;
      if (listData.next === null) break;
      listData = listData.next;
    }

    return false;
  }
}

let list = new SinglyLinkedList();
list.addHead(1);
list.addHead(2);
list.addHead(3);
//console.log(list.getIndexData(4));
list.addTail(7);
list.addTail(6);



