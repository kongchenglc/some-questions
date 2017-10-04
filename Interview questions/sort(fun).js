var arr2 = [12, 43, 34, 67, 5, 98];

function arrS(a, b) {
	return a - b;
}
//sort的参数（一个函数）如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序
//此处sort的参数是函数的返回值NaN，相当于没有参数的情况
console.info(arr2.sort(arrS()));