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
  let tempArr = "";
  let val = "";
  const surveyCount = survey.length;
  for (let i = 0; i < surveyCount; i += 1) {
	tempArr = survey[i].split('');
	val = (choices[i] <= 3) ? tempArr[0] : ((choices[i] >= 5) ? tempArr[0] : "");
	point = score[choices[i]];
	if (val) {
		
	}
    
  }
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];

solution(survey, choices);

