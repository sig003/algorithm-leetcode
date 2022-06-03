//규칙
//제일 앞과 제일 뒤는 항상 같다

//정상 동작은하나 leetcode에서 타임아웃 걸리는 소스
/*
const longestPalindrome = function(s) {
  let start = 0;
  let str = '';
  let max = '';
  if (s.length === 1) return s;
  str = s.substring(start, s.length);
  if (str === str.split("").reverse().join("")) return str;
  while (start < s.length) {
    for (let i = 1; i < s.length; i += 1) {
      if (s[start] === s[i]) {
        str = s.substring(start, i + 1);
        if (str === str.split("").reverse().join("")) {
          max = (str.length > max.length) ? str : max;
        }
      }
    }
    start += 1;
  }

  return max;
};
//*/

/*
const longestPalindrome = function(s) {
  let start = 0;
  let str = '';
  let max = '';
  let i = 0;
  while (start < s.length) {
    if (start === i) i += 1;
    if (s[start] === s[i]) {
      str = s.substring(start, i + 1);

      if (str === str.split("").reverse().join("")) {
        max = (str.length > max.length) ? str : max;
      } 
    }
    i += 1;
    if (i >= s.length) {
      start += 1;
      i = start;
    }
  }
  return max;
}
*/

//전체에서 찾는다
//가장 긴 것부터 찾고 그 다음으로 내려오는 방식

//전체를 한번 찾고 start 하나 앞에 찾고 start 하나 복귀하고 end 하나 줄여서 찾고 없으면 start 하나 추가, end 하나 빼고 전체 찾으면서 반복 
// start=0, end=s.length
// substring(start, end +1)
// start += 1, end=s.length
// start -= 1, end=s.length-1
// start +=1
//아래 소스는 문제 있음
/*const longestPalindrome = function(s) {
  let start = 0;
  let end = s.length;
  let str = '';
  
  for(let i = start; i < s.length; i += 1) {
    str = s.substring(start, end);
    backStr = str.split("").reverse().join("");
    if (str === backStr) {
      return str;
    } 
    str = s.substring(start + 1, end);
    backStr = str.split("").reverse().join("");
    if (str === backStr) {
      return str;
    }
    str = s.substring(start, end - 1);
    backStr = str.split("").reverse().join("");
    if (str === backStr) {
      return str;
    }
    start += 1;
    end -= 1;
  }
  return str;
}*/


//1번 기준으로 다시 작업해보자
//1번의 속도를 높이는 방향으로
//while 문을 for로 바꿔보자
const longestPalindrome = function(s) {
  let str = '';
  let max = '';
  if (s.length === 1) return s;
  str = s.substring(0, s.length);
  if (str === str.split("").reverse().join("")) return str;
  for (let k = 0; k < s.length; k += 1) {
    for (let i = 0; i < s.length; i += 1) {
      if (s[k] === s[i]) {
        str = s.substring(k, i + 1);
        if (str === str.split("").reverse().join("")) {
          max = (str.length > max.length) ? str : max;
        }
      }
    }
  }

  return max;
};



let s = '';
//s = 'babad';  //out: '', exp: 'bab'
//s = 'cbbd';
//s = 'a'; //out: '', exp: 'a'
//s='jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx';
//s='abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababa';
//s="fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
//s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
//s = 'ccd'; //out: d, exp: cc

//s = 'eabcb'; //out: b, exp: bcb

s='321012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210012321001232100123210123210012321001232100123210123';

//console.log(longestPalindrome(s));


let str = s.substring(0, 999);
let revStr = str.split("").reverse().join("");

if (str === revStr) console.log('same');
else console.log('not same');



//회문의 규칙
//끝자리와 앞자리가 같다: a...a
//끝자리가 같은 수의 안쪽 값이 짝수이면 양 끝값이 같다: ab..ba
//끝자리가 같은 수의 안쪽 값이 홀수이면 마지막 같은 상관없다: abcba


//여기 풀다가 봐야할 알고리즘이 많아져서 일단 BruteForce - DFS 보는 중