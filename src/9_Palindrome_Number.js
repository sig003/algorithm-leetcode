var isPalindrome = function(x) {
    const paramLength = x.toString().length;
	const number = Math.round(paramLength /2);
	const forward = x.toString().substr(0,number);
	const backward = x.toString().substr(-number,number);

	const arrayStr = backward.split('')
	arrayStr.reverse()
	const arrayReverse = arrayStr.join('')
	
	if (forward === arrayReverse) {
		return true;
	} else {
		return false;
	}
};
//1001,11.-121,121,10
console.log(isPalindrome(121));
