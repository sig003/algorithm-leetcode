//https://school.programmers.co.kr/learn/courses/30/lessons/72410
//만약 15자리 잘랐는데 또 끝에 .이면 재작업 해야됨

function solution(new_id) {
  let replaceId = new_id;

  if (!replaceId) return 'a'; //step 5

  replaceId = replaceId.toLowerCase(); //step 1

  replaceId = replaceId.replace(/[^0-9a-z-_.]/g, ''); //step 2

  replaceId = replaceId.replace(/\.{2,}/g, '.'); //step 3

  replaceId = replaceId.replace(/(^[\.]|[\.]$)/g, ''); //step 4

  replaceId = replaceId.substring(0, 15); //step 6

  if (replaceId.length <= 2) {
    //step 7
    const addString = replaceId[replaceId.length - 1];

    replaceId = `${replaceId}${addString}`;
  }

  return replaceId;
}

const new_id = 'abcdefghijklmn.p';
console.log(solution(new_id));

