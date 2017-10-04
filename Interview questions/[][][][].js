function chkParenthesis(A) {    
	var l = 0; //左括号数
	    
	for (var i = 0; i < A.length; i++) {        
		var c = A[i];        
		if (c == '[') {            
			l++;        
		} else if (c == ']') {            
			if (l > 0) {                
				l--;            
			} else {                
				return false;            
			}        
		} else {            
			return false;        
		}    
	}    
	return l == 0;
}
var line = "][".split("");
if (chkParenthesis(line) == true) {
	console.log(line.join(""));
} else {
	var numleft = 0;
	var numright = 0;
	for (let i = 0; i < line.length; i++) {
		if (line[i] == '[') numleft++;
		if (line[i] == ']') numright++;
	}
	for (let i = 0; i < Math.abs(numleft - numright); i++) {
		if (numleft > numright) {
			line.push('[');
		} else {
			line.unshift(']');
		}

	}
	while (!chkParenthesis(line)) {
		line.push(']');
		line.unshift('[');
	}
	console.log(line.join(""));
}