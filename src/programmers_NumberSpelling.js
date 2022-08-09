//https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const object = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  const length = object.length;

  for (let i = 0; i < length; i += 1) {
    //s = s.replace(object[i], i);
    s = s.split(object[i]).join(i);
  }
  return Number(s);
}

const s = '2three45sixseven';
console.log(solution(s));

