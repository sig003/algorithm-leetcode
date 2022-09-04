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
  let i = 0;
  let temp = '';
  for (const val in obj) {
  }
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];

solution(survey, choices);

