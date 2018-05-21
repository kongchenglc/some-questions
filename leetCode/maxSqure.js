var maximalSquare = function(matrix) {
	let maxArea = 0

	function find(i,j){
		let offset = 0
		while(1) {
			for(let a = 0; a <= offset; a++) {
				for (var b = 0; b <= offset; b++) {
	    		 	if(matrix[i+a]===undefined || parseInt(matrix[i+a][j+b]) !== 1) {
	    		 		return (offset)*(offset)
	    		 	}
				}
			}
			offset++
		}
	}


	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			find(i,j) > maxArea ? maxArea = find(i,j) : maxArea
		}
	}
	return maxArea
};

const arr = [['1','0','1','0','0'],['1','0','1','1','1'],['1','1','1','1','1'],['1','0','0','1','0']]
console.log(arr)
console.log(maximalSquare(arr))