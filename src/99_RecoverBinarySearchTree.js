function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {
  if (!root) return root;
  let tmp = 0;
  return Helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

  function Helper(root, min, max) {
    if (!root) return root;
    if (root.val <= root.left) {
      tmp = root.val;
      root.val = root.left;
      root.left = tmp;
    }
    if (root.val >= root.right) {
      tmp = root.val;
      root.val = root.right;
      root.right = tmp;
    }
console.log(root);
    return Helper(root.left, min, root.val) && Helper(root.right, root.val, max);
  }
};

//let root = new TreeNode(1,3,null);
//root.left = new TreeNode(3,null,2);
//root.right = new TreeNode(4,3,6);

//console.log(root);
//console.log(recoverTree(root));

let root = new TreeNode(3,1,2,null,null,5,1);

console.log(recoverTree(root));


