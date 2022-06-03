const isValid = function(s) {
	const arrVal = s.split('');
	let braceCount = 0;
	let checkBack = false;
	let back = "";
	let front = "";
	let frontRes = false;
	let backRes = false;

	if (arrVal.length % 2 > 0) return false;

	for(let i=0; i<arrVal.length; i++) {
		if (arrVal[i] === "[") back = "]";
		else if (arrVal[i] === "(") back = ")";
		else if (arrVal[i] === "{") back = "}";
		else if (arrVal[i] === ")" || arrVal[i] === "}" || arrVal[i] === "]") continue;
		braceCount = 0;
		for(let j=i+1; j<arrVal.length; j++) {
			checkBack = false;
			if (arrVal[j] === back && braceCount-- % 2 === 0) {
				checkBack = true;
				break;
			} else {
				braceCount++;
			}
		}
	
		if (checkBack === false) return false;
		if (arrVal[arrVal.length-1] === "[" || arrVal[arrVal.length-1] === "(" || arrVal[arrVal.length-1] === "{" ) return false;
	}
	
	for(let i=arrVal.length-1; i>=0; i--) {
		if (arrVal[i] === "]") front = "[";
		else if (arrVal[i] === ")") front = "(";
		else if (arrVal[i] === "}") front = "{";
		else if (arrVal[i] === "(" || arrVal[i] === "{" || arrVal[i] === "[") continue;
		braceCount = 0;
		
		for(let j=i-1; j>=0; j--) {console.log(j);
			checkBack = false;
			if (arrVal[j] === front && braceCount-- % 2 === 0) {
				checkBack = true;
				break;
			} else {
				braceCount++;
			}
		}

		if (checkBack === false) return false;
		if (arrVal[0] === "]" || arrVal[0] === ")" || arrVal[0] === "}" ) return false;
	}

	return true;

}
//output : true, expected : false
//(){}}{
//console.log(isValid('(){}}{'));
//console.log(isValid('[{()}]'));
//isValid('[{()}]');
//()[]{}
//expected : true
//(([]){})
//01234567
//하나의 괄호안에는 짝수개가 들어가야 한다, 홀수개가 들어가면 아웃. 
//괄호가 열렸을때 다음에 만나는 짝이 나와야 하고 그 짝 안에는 짝수개 또는 zero만 있어야 함
//expected : true

//앞으로 한번, 뒤로 한번 돌려서 모두 true가 나오면 정상이다

console.log(isValid("()[]{}")); //true
console.log(isValid('(){}}{')); //false
console.log(isValid("({{{{}}}))")); //false
console.log(isValid("([}}])")); //false*/
console.log(isValid("{[]}")); //true
console.log(isValid("[({])}")); //false
