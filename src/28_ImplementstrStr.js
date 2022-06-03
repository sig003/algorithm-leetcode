var strStr = function(haystack, needle) {
	if (!haystack && !needle) return 0;
    return haystack.indexOf(needle);
};

let haystack = "hello";
let needle = "ll"

console.log(strStr(haystack, needle));


