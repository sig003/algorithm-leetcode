//https://jeong-pro.tistory.com/131
//https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b
//https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
//https://www.geeksforgeeks.org/binary-search-tree-set-2-delete/?ref=lbp
//https://www.programiz.com/dsa/binary-search-tree
//https://levelup.gitconnected.com/deletion-in-binary-search-tree-with-javascript-fded82e1791c
//https://yoongrammer.tistory.com/71
//https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
//https://im-developer.tistory.com/102

//insert, find, delete

/*class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.val < root.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
  remove(data)
  {
    this.root = this.removeNode(this.root, data);
  }
  
 removeNode(node, key)
  {
    if(node === null) {
      return null;
    } else if(key < node.val) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if(key > node.val) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
  
      if(node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }
  
      var aux = this.findMinNode(node.right);
      console.log(`aux: ${aux.val}`);
      node.val = aux.val;
  
      node.right = this.removeNode(node.right, aux.val);
      return node;
    }
  }

  findMinNode(node) {
    if(node.left === null) {
      return node;
    } else {
        return this.findMinNode(node.left);
    }
  }
}*/

//순회
//https://sean-ma.tistory.com/25
//https://deok2kim.tistory.com/110

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;    
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.val < root.val) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  remove(val) {
    this.removeNode(this.root, val);
  }
  removeNode(root, val) {
    if (root === null) {
      return null;
    } else if (val < root.val) {
      root.left = this.removeNode(root.left, val);
      return root;
    } else if (val > root.val) {
      root.right = this.removeNode(root.right, val);
      return root;
    } else {
      if (root.left === null && root.right === null) {
        return null;
      }

      if (root.left === null) {
        root = root.right;
        return root;
      } else if (root.right === null) {
        root = root.left;
        return root;
      }

      const aux = this.findMinNode(root.right);
      root.val = aux.val;

      root.right = this.removeNode(root.right, aux.val);
      return root;
    }
  }

  findMinNode(root) {
    if (root.left === null) {
      return root.val;
    } else {
      return this.findMinNode(root.left);
    }
  }

  order(searchOption) {
    if (searchOption == 'preorder') {
      this.preOrder(this.root);
    } else if (searchOption == 'postorder') {
      this.postOrder(this.root);
    } else if (searchOption == 'inorder') {
      this.inOrder(this.root);
    } else if (searchOption === 'bfs') {
      this.bfs(this.root);
    }
  }

  /*preOrder(node) {
    console.log(node.val);
    if (node.left !== null && node.right !== null) {
      if (node.left) {
        this.preOrder(node.left);
      }
      if (node.right) {
        this.preOrder(node.right);
      }
    } else {
      if (node.left !== null || node.right !== null) {
        if (node.left === null) {
          this.preOrder(node.right);
        } else if (node.right === null) {
          this.preOrder(node.left);
        }
      }
    } 
  }
  //케이스를 3개로 분류해야하는 것 아닌가?
  //양쪽 다 있을때, 한쪽만 있을때, 양쪽다 없을때
  
  inOrder(node) {
    let leftVal = '';
    let rightVal = '';
    if (node.left !== null && node.right !== null) {
      leftVal = this.inOrder(node.left);
      console.log(node.val);
      rightVal = this.inOrder(node.right);
    } else {
      if (node.left !== null) {
        console.log(node.val);
        leftVal = this.inOrder(node.left);
        return leftVal;
      }

      if (node.right !== null) {
        console.log(node.val);
        rightVal = this.inOrder(node.right);
        return rightVal;
      }

      if (node.left === null && node.right === null) {
        console.log(node.val);
        return null;
      }
    }
  }

  postOrder(node) {
    let leftVal = '';
    let rightVal = '';
    if (node.left !== null && node.right !== null) {
      leftVal = this.postOrder(node.left);
      rightVal = this.postOrder(node.right);
      console.log(node.val);
    } else {
      if (node.left === null && node.right === null) {
        console.log(node.val);
        return null;
      }
      if (node.left !== null) {
        
        leftVal = this.inOrder(node.left);
        console.log(node.val);
        return leftVal;
      }

      if (node.right !== null) {
        
        rightVal = this.inOrder(node.right);
        console.log(node.val);
        return rightVal;
      }
    }
  }*/
  inOrder(node) {
    if(node !== null) {
        this.inOrder(node.left);
        console.log(node.val);
        this.inOrder(node.right);
    }
  }
  preOrder(node) {
    if(node !== null) {
        console.log(node.val);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
  }
  postOrder(node) {
    if(node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.val);
    }
  }
  //https://stackoverflow.com/questions/43722790/breadth-first-search-binary-search-tree-javascript-implementation
  //https://dev.to/snird/breadth-first-traversal-for-binary-trees-in-js-h9m
  //https://soldonii.tistory.com/95
  /*bfs(node) {
    if (node !== null) {
      let currentNode = node;
      let list = [];
      let queue = [];
      queue.push(currentNode);

      while(queue.length > 0) {
        currentNode = queue.shift();
        list.push(currentNode.val);
        if(currentNode.left) {
          queue.push(currentNode.left);
        }
        if(currentNode.right) {
          queue.push(currentNode.right);
        }
      }
      return list;
    }
  }*/

  bfs(node) {
    let currentVal = '';
    const list = [];
    const queue = [];
    queue.push(node);

    while(queue.length > 0) {
      currentVal = queue.shift();
      list.push(currentVal.val);

      if (currentVal.left) {
        queue.push(currentVal.left);
      }
      if (currentVal.right) {
        queue.push(currentVal.right);
      }
    }
    console.log(list);
    return list;
  }
}


const bst = new BST();
bst.insert(8);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(10);
bst.insert(14);
//console.log(JSON.stringify(bst, '', '\t'));
//bst.remove(10);
//console.log(JSON.stringify(bst, '', '\t'));
bst.order('bfs');







