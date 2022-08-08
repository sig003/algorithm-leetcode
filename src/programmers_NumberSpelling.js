//https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const object = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };

  const length = Object.keys(object).length;

  for (i = 0; i < length; i += 1) {
    s = s.replace(object[i], i);
  }
  return Number(s);
}

const s = '2three45sixseven';
console.log(solution(s));

