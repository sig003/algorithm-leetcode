//https://leetcode.com/problems/longest-univalue-path/
//https://www.geeksforgeeks.org/longest-path-values-binary-tree/

function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const longestUnivaluePath = function(root) {
  const findMaxVal = (data) => {
    if (data === null) return 0;

    let left = findMaxVal(data.left);
    let right = findMaxVal(data.right);

    if (data.left) {
      left += (data.val === data.left.val) ? 1 : -left;
    }
    if (data.right) {
      right += (data.val === data.right.val) ? 1 : -right;
    }

    count = Math.max (count, left + right);
    return Math.max (left, right); 
  }

  let count = 0;
  findMaxVal(root);
  return count;
};



const bst = new TreeNode(5);
bst.left = new TreeNode(4);
bst.right = new TreeNode(5);
bst.right.right = new TreeNode(5);
bst.left.left = new TreeNode(1);
bst.left.right = new TreeNode(1);


/*const bst = new TreeNode(1);
bst.left = new TreeNode(4);
bst.right = new TreeNode(5);
bst.right.right = new TreeNode(5);
bst.left.left = new TreeNode(4);
bst.left.right = new TreeNode(4);*/

//console.log(JSON.stringify(bst, '', '\t'));

console.log(longestUnivaluePath(bst));

