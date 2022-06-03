/*
0
1 2

1
3 4 + 2

2
5 6 + 3

5
7 8 + 2

6
9 10 +3
*/

/*
const isValidBST = function(root) {
  function chk(val, left, right) {
    if (val <= left || val >= right) return false;
    return true;
  }

  for (let i = 0; i < root.length; i += 1) {
    if (i === 2) {
      if (chk(root[0], root[1], root[2]) === false) return false; 
    }
    if (i> 2 && i > 2) {
      if (i % 2 === 0) {
        if (chk(root[i], root[i+3], root[i+4]) === false) return false; 
      } else {
        if (chk(root[i], root[i+2], root[i+3]) === false) return false; 
      }
    }
  }
  return true;
};
*/
//https://ratsgo.github.io/data%20structure&algorithm/2017/10/21/tree/
//left_index = 2 * index + 1
//right_index = 2 * index + 2

/*
const isValidBST = function(root) {
  function chk(val, left, right) {
    if (val <= left || val >= right) return false;
      return true;
    }
  
	let left = 0;
	let right = 0;
	for(let i = 0; i < root.length; i += 1) {
	  left = 2 * i + 1;
    right = 2 * i + 2;
    if (Number.isNaN(root[i]) === false && Number.isNaN(root[left]) === false && Number.isNaN(root[right]) === false) {
      if (chk(root[i], root[left], root[right]) === false) return false;
    }
	}
	return true;
};*/

//TreeNode 세팅하는 법
//https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/435296/How-do-I-create-the-TreeNode-from-an-array-of-numbers-using-javascript-or-java

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

//최상위 root값은 좌측 트리의 하위 뎊스 보다는 무조건 커야되고 우측 트리의 하위 뎊스 보다는 무조건 작아야 된다.
//단순히 root.left <= root.val <= root.right 로만 비교하면 안 된다. 최상위 root 값을 고려해야 한다.
//여기선 최상위 root 값을 비교하는 로직은 없지만 이미 지나쳐온 길은 맞다고 간주하므로 더 이상 보지 않을 뿐이다.
//min, max에 Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER 값을 할당하는 건 기준값이 필요하기 때문이다. 
//root.left는 root.val 보다 크면 안되고 root.right는 root.val보다 작으면 안된다. 이렇게만 비교하면 되는데 대신 이때 비교할 값의 min, max가 필요해서 최대값을 할당해 준 것 뿐이다.
//그 값 자체에 의미가 있는건 아니다. 어차피 그 이상 커지거나 작아질 수 없기 때문에.
//dfs(root.left, min, root.val) == Number.MIN_SAFE_INTEGER < root.left < root.val
//dfs(root.right, root.val, max) == root.val < root.right < Number.MAX_SAFE_INTEGER
const isValidBST = function(root) {
  if (!root) return true;
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  
  function dfs(root, min, max){
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
        
      return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
  }
};
let root = new TreeNode(5,1,4);
root.left = new TreeNode(1,null,null);
root.right = new TreeNode(4,3,6);

//console.log(root);
//isValidBST(root);

//console.log(isValidBST(root));



