var romanToInt = function(s) {
	const arrStr = [{'index':'I','val':1}, 
					{'index':'V','val':5}, 
					{'index':'X','val':10}, 
					{'index':'L','val':50}, 
					{'index':'C','val':100}, 
					{'index':'D','val':500}, 
					{'index':'M','val':1000}, 
					{'index':'IV','val':4}, 
					{'index':'IX','val':9}, 
					{'index':'XL','val':40}, 
					{'index':'XC','val':90}, 
					{'index':'CD','val':400}, 
					{'index':'CM','val':900}];

	const inputVal = s.toUpperCase();
	const arrInputVal = inputVal.split('')
	let sumVal = 0;
	const doubleVal = [];
	let tempVal = '';
	let chk = -1;
	let sumChar = '';
	
	for(let j=7; j<arrStr.length; j++) {
		tempVal = inputVal.indexOf(arrStr[j]['index'])
		
		if (tempVal > -1) {
			doubleVal.push(tempVal);
		}
	}
	doubleVal.sort()
	
	//MCMXCIV
	//0123456
	// 1 3 5
/	//MCMXCVI
	// 1 3
	//output : 1990
	//expected : 1996
	
	for(let i=0; i<arrInputVal.length; i++) {
		if (doubleVal.length > 0) {
			for(let k=0; k<doubleVal.length; k++) {
				if (i === doubleVal[k] ) {
					sumChar = '';
					sumChar += arrInputVal[i];
					sumChar += arrInputVal[i+1];
					sumVal += arrStr.find(index => index.index === sumChar).val
					chk = i+1;
				}
			}
		}
		if(chk <= 0) {
			sumVal += arrStr.find(index => index.index === arrInputVal[i]).val
		}	
		if (chk == i ) {	
			chk = -1;
			continue;
		} 

	}
	
	return sumVal; 
};

console.log(romanToInt('MCMXCVI'));
