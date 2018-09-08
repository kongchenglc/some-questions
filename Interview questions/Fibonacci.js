// 斐波那契数列
function loop(num) {
	if(num === 1 || num === 2) {
		return 1
	} else {
		return loop(num - 1) + loop(num - 2)
	}
}


// 无重复计算
function fun(num) {
	let index = 0
	const resultArr = [];
	(function loop(index) {
		if(index <= 1) {
			resultArr[index] = index
			return index
		}
		resultArr[index] = loop(index - 1) + loop(index - 2)
		return resultArr[index - 1] + resultArr[index - 2]
	})(num)
	return resultArr
}
console.log(fun(4))