const longestCommonPrefix = function(strs) {
  let prefix = '';
  let tempPrefix = [];
  let arrVal = '';
  let nextIdx = 0;

  if (strs.length > 1) {
    for (let i = 0; i < strs.length; i++) {
      if (i === 0) {
        prefix = strs[i].split('');
      } else {
        prefix = tempPrefix;
      }

      if (nextIdx<strs.length-1) nextIdx++;

      arrVal = strs[nextIdx].split('');

      tempPrefix = [];
  
      for(let j=0; j<prefix.length; j++) {
        if (prefix[j] === arrVal[j]) {
          tempPrefix.push(prefix[j]);
        } else {
          break;
        }
      }
    }
    strs = prefix.join('');
  } else {
    strs = strs.join('');
  }

  return strs;
}

//const arr = ["flower","flow","flight"];
//const arr = ["dog","racecar","car"];
const arr = ["aaa","aa","aaa"];
console.log(longestCommonPrefix(arr));