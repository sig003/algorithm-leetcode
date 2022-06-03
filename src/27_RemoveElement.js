var removeElement = function(nums, val) {
	/*let newArr;
	newArr = nums.filter(idx => idx !== val);
	console.log(newArr);
	return newArr.length;*/

	for (let i=0; i < nums.length; i += 1) {
		if (val === nums[i]) {
			nums.splice(i, 1);
			i--;
		}
	}

	return nums.length;
};

let arr = [0,1,2,2,3,0,4,2];
let val = 2;
removeElement(arr, val);