function mul(x) {
	const result = (y) => mul(x * y); 
	//valueOf函数重写，在求值的时候会调用
	result.valueOf();
	result.valueOf = () => {console.log("diaoyongle"); return x};
	return result;
}
console.log(mul(2)(3)(4));