//https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  let zeroCount = 0;
  let fitCount = 0;
  let obj = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  for (let i = 0; i < lottos.length; i += 1) {
    if (lottos[i] === 0) {
      zeroCount += 1;
    } else if (win_nums.includes(lottos[i])) {
      fitCount += 1;
    }
  }
  const firstVal = obj[zeroCount + fitCount];
  const lastVal = obj[fitCount];

  return [firstVal, lastVal];
}
