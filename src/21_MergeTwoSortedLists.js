/*
int get(int index) : 인자로 전달되는 index의 데이터를 리턴
void addAtHead(int val) : node를 리스트의 맨 앞에 추가
void addAtTail(int val) : node를 리스트 마지막에 추가
void addAtIndex(int index, int val) : 특정 index에 node를 추가
void deleteAtIndex(int index) : 특정 index의 node를 삭제

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * # singly list li
https://boycoding.tistory.com/33
https://velog.io/@760kry/JS-Linked-List-vs-Array-List-data-structor
https://medium.com/amhocode/linked-list-hash-table-c606b6f230b2
https://www.zerocho.com/category/Algorithm/post/58008a628475ed00152d6c4d
https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
 
https://github.com/Deliaz/print-linked-list/blob/master/tests/LinkedList.class.js
* 
 * 
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  append(value) {
    const newNode = new LinkedList(value);
    let end = this;

    while(end.next) {
      end = end.next;
    }
    end.next = newNode;
  }
}

let aa = new LinkedList(2);
aa.append(1);
aa.append(3);
console.log(aa);

/*class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkdList {
  add(val) {
    this.list = {};
    let addNode = new Node(val);
    if (!this.list) {
      this.list = addNode;
    } else {
      let node = this.list;

      while(node.next) {
        node = node.next;
      }
      node.next = addNode;
    }
  }
}

let aa = new LinkdList();
aa.add(2);
aa.add(3);
console.log(aa);*/


