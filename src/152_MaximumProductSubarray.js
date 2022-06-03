/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
/*  let count = 0;
  let productArray = [];
  let tempArray = [];
  let res = 0;
  let num = 0;
  for (let i = 0; i < nums.length; i += 1) {
	if (count === 0 && i > 0) {
		if (productArray.length > 0) {
		  res = productArray.reduce((acc, cur) => { return acc * cur });
		  if (res > 0) tempArray.push(res);
		}
		productArray = [];
	}
    if (Math.sign(nums[i]) === 1) {
      if (count === 2) {
		productArray.push(nums[i - 1]);
		productArray.push(nums[i]);
	  } else {
		productArray.push(nums[i]);  
	  }
	  count += 1;
	} else {
	  count = 0;
	}
  }
 
  if (tempArray.length > 0) {
	  num = tempArray.reduce((prev, now) => { return prev > now ? prev:now; })
  }

  return num;*/
  let res = -Number.MAX_VALUE;
  let min = 1;
  let max = 1;
  for (let num of nums) {
    [min, max] = [
      Math.min(num, min * num, max * num),
      Math.max(num, min * num, max * num),
    ];
    res = Math.max(res, max);
  }
  return res;
};


//nums = [2,3,-2,4];
//nums =  [-2,0,-1];
nums = [-2]; //expected : -2 but 0
console.log(maxProduct(nums));