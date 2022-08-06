/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//https://leetcode.com/problems/is-subsequence/
//Solved

const isSubsequence = function (s, t) {
  length = t.length;
  let index = 0;
  for (i = 0; i < length; i += 1) {
    if (t[i] === s[index]) {
      index += 1;
    }
  }

  if (s.length === index) return true;
  return false;
};

const s = 'axc';
const t = 'ahbgdc';
console.log(isSubsequence(s, t));

