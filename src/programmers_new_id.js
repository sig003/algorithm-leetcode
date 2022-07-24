//https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let replaceId = new_id;

  if (!replaceId) return 'a'; //step 5

  replaceId = replaceId.toLowerCase(); //step 1

  replaceId = replaceId.replace(/[^0-9a-z-_.]/g, ''); //step 2

  replaceId = replaceId.replace(/.{2,}/g, '.');

  return replaceId;
}

const new_id = 'ABC!';
console.log(solution(new_id));

