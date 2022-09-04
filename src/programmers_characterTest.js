//https://school.programmers.co.kr/learn/courses/30/lessons/118666
function solution(survey, choices) {
  const score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  let point = 0;
  let tempArr = '';
  let val = '';
  const obj = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  const surveyCount = survey.length;
  for (let i = 0; i < surveyCount; i += 1) {
    tempArr = survey[i].split('');
    val = choices[i] <= 3 ? tempArr[0] : choices[i] >= 5 ? tempArr[1] : '';
    point = score[choices[i]];
    if (val) {
      obj[`${val}`] = obj[`${val}`] + point;
    }
  }
  let returnVal = '';
  let i = 0;
  let firstVal = '';
  let secondVal = '';
  while (i < 8) {
    firstVal = Object.values(obj)[i];
    secondVal = Object.values(obj)[i + 1];
    firstIndex = Object.keys(obj)[i];
    secondIndex = Object.keys(obj)[i + 1];
    asciiVal = firstIndex.charCodeAt(0) < secondIndex.charCodeAt(0) ? firstIndex : secondIndex;
    returnVal =
      returnVal +
      (firstVal > secondVal ? firstIndex : firstVal === secondVal ? asciiVal : secondIndex);
    i += 2;
  }
  return returnVal;
}

const survey = ['TR', 'RT', 'TR'];
const choices = [7, 1, 3];

console.log(solution(survey, choices));

