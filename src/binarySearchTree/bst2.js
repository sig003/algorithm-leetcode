//insert
//delete
//find
//DFS(preorder, inorder, postorder)
//BFS

class Node {
  constructor(val) {
	this.val = val;
	this.left = null;
	this.right = null;
  }
}

class BST {
  constructor() {
	this.node = null;
  }

  insert(val) {
    if (val === '') return null;
    this.node = this.insertNode(this.node, val);
  }

  insertNode(node, val) {
	  const newNode = new Node(val);
	  if (node === null) {
      node = newNode;
      return node;
	  } else {
      if (val === node.val) {
        return null;
      } else {
        if (val < node.val) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            this.insertNode(node.left, val);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            this.insertNode(node.right, val);
          }
        }
      }
      return node;
    }
  }

  delete(val) {
    if (val === null || this.node === null) return null;
    this.deleteNode(this.node, val);
  }

  deleteNode(node, val) {
   if (val < node.val) {
    node.left = this.deleteNode(node.left, val);
    return node;
   } else if (val > node.val) {
    node.right = this.deleteNode(node.right, val);
    return node;
   } else {
     if (node.left === null && node.right === null) {
       node = null;
       return node;
     }

     if (node.left === null) {
       node = node.right;
       return node;
     }

     if (node.right === null) {
       node = node.left;
       return node;
     }

     const aux = this.findMinNode(node.right);
     node.val = aux.val;

     node.right = this.deleteNode(node.right, aux.val);
     return node;
   }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  } 
}

const bst = new BST();
bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(7);
bst.delete(2);
console.log(JSON.stringify(bst, '', '\t'));