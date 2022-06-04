//https://leetcode.com/problems/unique-binary-search-trees/
//https://smlee729.wordpress.com/2018/03/10/algorithm-문제-unique-binary-search-trees/
//입력한 값이 1부터 n개의 정수가 되는 것이다. 1부터 n개의 정수를 가지고 만들 수 있는 유니크 조합을 찾는 것이다. 
//n=4 이면 1,2,3,4로 만들 수 있는 조합을 찾는다.
//1부터 n개까지의 값을 bst에 넣는다. 같은 값이 있으면 넣지 않는다. 
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const numTrees = function(n) {

};

console.log(numTrees(4));

/*const aa = {val: 1, left: 3, right: 2};
const bb = {val: 1, left: 3, right: 2};

if (JSON.stringify(aa) === JSON.stringify(bb)) {
  console.log('same');
} else {
  console.log('diff');
}*/
 