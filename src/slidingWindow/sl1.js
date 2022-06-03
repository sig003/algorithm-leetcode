//배열에서 주어진 범위의 총 합 중 가장 큰 수 구하기
//sliding window reduce로 해결하기

function arrayMaxTotal(arr, k) {
  let sum = 0;
  let max = 0;

  for (let i = 0; i < k; i += 1 ) {
	  sum += arr[i];
  }
  
  for (let i = k; i < arr.length; i += 1) {
	  sum += arr[i] - arr[i-k];

	  if (sum > max) {
		  max = sum;
	  }
  }
 

  return max;
}

let arr = [];
arr = [100, 200, 300, 400];
let k = 2;
console.log(arrayMaxTotal(arr, k));