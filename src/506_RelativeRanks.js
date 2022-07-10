//https://leetcode.com/problems/relative-ranks/

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const tempArr = Object.assign([], score);

  const scoreLength = score.length;
  const obj = {};
  const returnArr = [];
  tempArr.sort((a, b) => b - a);
  let val = '';

  for (let i = 0; i < scoreLength; i += 1) {
    if (i === 0) {
      val = 'Gold Medal';
    } else if (i === 1) {
      val = 'Silver Medal';
    } else if (i === 2) {
      val = 'Bronze Medal';
    } else {
      val = (i + 1).toString();
    }
    obj[tempArr[i]] = val;
  }

  for (let i = 0; i < scoreLength; i += 1) {
    const objVal = obj[score[i]];

    returnArr.push(objVal);
  }

  return returnArr;
};

const score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));

