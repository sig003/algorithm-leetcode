//https://school.programmers.co.kr/learn/courses/30/lessons/67256
//값을 객체의 객체에 넣는다.
//각 값을 층으로 나눠 1층과 4층은 4개, 1층과 3층은 3개 이런식으로 거리를 판단한다.
//1:{1,2,3}
//2:{4,5,6}
//3:{7,8,9}
//4:{*,0,#}
//왼쪽, 오른쪽 마지막 위치를 기억하고 있어야 함
//2,5,8,0은 항상 양손의 마지막 위치에서 비교를 해 봐야 함
//배열을 column, row로 분류함
function solution(numbers, hand) {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  const column = val => {
    if (/(1|2|3)/g.test(val)) return 1;
    if (/(4|5|6)/g.test(val)) return 2;
    if (/(7|8|9)/g.test(val)) return 3;
    if (/(\*|0|\#)/g.test(val)) return 4;
    return 0;
  };

  const row = val => {
    if (/(1|4|7|\*)/g.test(val)) return 1;
    if (/(2|5|8|0)/g.test(val)) return 2;
    if (/(3|6|9|\#)/g.test(val)) return 3;
    return 0;
  };

  const returnHand = (left, right, val) => {
    const leftRow = row(left);
    const rightRow = row(right);
    const valRow = row(val);

    const leftRowDiff = leftRow > valRow ? leftRow - valRow : valRow - leftRow;
    const rightRowDiff = rightRow > valRow ? rightRow - valRow : valRow - rightRow;

    const leftCol = column(left);
    const rightCol = column(right);
    const valCol = column(val);

    const leftColDiff = leftCol > valCol ? leftCol - valCol : valCol - leftCol;
    const rightColDiff = rightCol > valCol ? rightCol - valCol : valCol - rightCol;

    const totalLeft = leftRowDiff + leftColDiff;
    const totalRight = rightRowDiff + rightColDiff;
    //console.log(`L=${left} R=${right} V=${val} TL=${totalLeft} TR=${totalRight}`);
    if (totalLeft < totalRight) {
      return 'L';
    } else if (totalLeft > totalRight) {
      return 'R';
    } else {
      if (hand === 'right') {
        return 'R';
      } else {
        return 'L';
      }
    }
  };

  const length = numbers.length;
  let position = '';
  let leftPosition = '*';
  let rightPosition = '#';

  for (let i = 0; i < length; i += 1) {
    if (/(1|4|7|\*)/g.test(numbers[i])) {
      position += 'L';
      leftPosition = numbers[i];
    } else if (/(3|6|9|\#)/g.test(numbers[i])) {
      position += 'R';
      rightPosition = numbers[i];
    } else {
      const handPosition = returnHand(leftPosition, rightPosition, numbers[i]);
      position += handPosition;

      if (handPosition === 'L') {
        leftPosition = numbers[i];
      } else {
        rightPosition = numbers[i];
      }
    }
  }

  return position;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';
console.log(solution(numbers, hand));

