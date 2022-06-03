var removeDuplicates = function(nums) {
  /*let firstArrayLength = nums.length;
  let count = true;	
  while(count !== false) {
	let check = 0;
    for(let i=0; i<nums.length; i++) {
	  if (i+1 < nums.length) {
		if (nums[i] === nums[i+1]) {
			nums.splice(i+1, 1);
			check += 1;
		}
	  }
	  if (check === 0) count = false;
    }
  }
  let minus = firstArrayLength - nums.length;

  let LastArrayLength = 0;
  LastArrayLength = nums.length;

  for(let j=0; j<minus; j++) {
	  nums.push('_');
  }

  return LastArrayLength;*/

  for (let i = 0; i < nums.length; i += 1) {
	  if (i+1 < nums.length) {
		  if (nums[i] === nums[i+1]) {
			  nums.splice(i, 1);
			  i--;
		  }
	  }
  }
  console.log(nums);
};

//let nums = [1,1,2];
//let nums = [1,1,1,2];
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));