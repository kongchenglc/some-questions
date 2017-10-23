function mul(x) {
	const result = (y) => mul(x * y); 
	//valueOf函数重写，在求值的时候会调用
	result.valueOf = () => {console.log("diaoyongle"); return x};
	return result;
}
console.log(mul(2)(3)(4));
//f 24
//diaoyongle


//返回的都是函数，没有返回的是值，只不过函数在不当作函数使用时会调用valueOf求值。

mul(2);   //为例
//调用后返回一个函数：
(y) => mul(2 * y);
//这个函数的valueOf返回2。
//如果当作函数使用，传入的参数会乘上之前叠加的乘积。
//如果当作值，就返回当前的值。