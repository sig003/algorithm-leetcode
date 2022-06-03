//문자열이 반복되지 않아야 한다
//반복되지 않는 문자열 중 제일 긴 것
/*const lengthOfLongestSubstring = function(s) {
  if (s === ' ') return 1;
  let str = '';
  let arr = [];
  let i = 0;
  
  while (s.length > i) {
    for (let j = i; j < s.length; j += 1) {
      if (!str.includes(s[j])) {
        str += s[j];
        continue;
      }
      arr.push(str);
      str = '';
      break;
    }
    i += 1;
  }
  if (arr.length === 0) arr.push(s);

  let maxLength = 0;
  for (let i = 0; i < arr.length; i += 1) {
    maxLength = (maxLength > arr[i].length) ? maxLength:arr[i].length;
  }

  return maxLength;
}
let s = '';
//s = "abcabcbb"; //output: 3, expected: 3
//s = 'bbbb'; //output: 1, expected: 1
//s = "pwwkew"; //output: 3, expected: 3
//let s = " ";
//let s = 'c';
//let s = ' ';
//let s = '';
//s = 'au'; 
//let s = 'aab';
//s = 'dvdf'; //output : 2, expected : 3

let s = '';
//s = 'dvdf';
s = 'c'; //output: 0, expected: 1
lengthOfLongestSubstring(s);*/


//sliding window 로 해결
//중복되지 않는 윈도우 범위값을 최초에 구하고 이후 그 값보다 큰 값이 나오면 변화시키는 방식


/*const lengthOfLongestSubstring = (s) => {
  let maxLength = 0;
  let str = '';

  for (i = 0; i < s.length; i += 1) {
    for (j = i; j < s.length; j += 1) {
      if (!str.includes(s[j])) {
        str += s[j];
        if (s.length > 1) continue;
      }
      maxLength = (maxLength > str.length) ? maxLength : str.length;
      str = '';
      break;
    }
  }
  return maxLength;
}*/

/*const lengthOfLongestSubstring = (s) => {
  let right = 0;
  let left = 0;
  let result = 0;
  let arr = new Set();

  while (right < s.length) {
    if (arr.has(s.charAt(right))) {
      arr.delete(s.charAt(left));
      left += 1;
    } else {
      arr.add(s.charAt(right));
      right += 1;
      result = Math.max(result, arr.size);
    }    
  }
  return result;
}

let s = 'dvdf';
console.log(lengthOfLongestSubstring(s));*/


const lengthOfLongestSubstring = (s) => {
  let start = 0;
  let cal = 0; 
  let startCal = 0;
  let maxLength = 0;
  let obj = new Map();

  for (let i = 0; i < s.length; i += 1) {
    if (obj.has(s[i])) {
      startCal = obj.get(s[i]) + 1;
      start = (startCal > start) ? startCal:start;
    }
    obj.set(s[i], i);
    
    cal = i - start + 1;
    maxLength = (cal > maxLength) ? cal:maxLength;
  }
  console.log(maxLength);
  return maxLength;
}

let s = 'abba'; //out: 3, exp: 2
lengthOfLongestSubstring(s);



