//https://school.programmers.co.kr/learn/courses/30/lessons/64061
//board는 위에서부터 순서대로 쌓이는 것임
function solution(board, moves) {
  const array = [];
  for (let i = 0; i < moves.length; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      if (board[j][moves[i] - 1] !== 0) {
        array.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === array[i + 1]) {
      count += 2;
      i += 2;
    }
  }
  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));

