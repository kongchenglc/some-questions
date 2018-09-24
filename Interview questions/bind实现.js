//实现简单的可传参的bind
Function.prototype.bind1 = function(...props) {
	let self = this
	return function(...insideProps) {
		return self.call(...props, ...insideProps)
	}
}



a = 20
var obj = {
	a: 10,
}
function fun(prop1, prop2) {
	console.log(this.a)
	console.log(prop1)
	console.log(prop2)
}

fun('X', 'Y')

newFun = fun.bind1(obj, 'A')
newFun('B')



// --------------------------------------
// 上边是简单实现，这是标准实现：
Function.prototype.bind2 = function (context) {

	// 调用bind的不是函数要报错
	if (typeof this !== "function") {
		throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
	}

	var self = this;
	var args = Array.prototype.slice.call(arguments, 1);

	var fbound = function () {
		// 当作为构造函数时，this 指向实例，self 指向绑定函数，因为下面一句 `fbound.prototype = this.prototype;`，已经修改了 fbound.prototype 为 绑定函数的 prototype，此时结果为 true，当结果为 true 的时候，this 指向实例。
        // 当作为普通函数时，this 指向 window，self 指向绑定函数，此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
		self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
	}

	// 使用空函数中转，防止修改 fbound.prototype 的时候，会直接修改函数的 prototype
	var fNOP = function () {};
	fNOP.prototype = this.prototype;
	fbound.prototype = new fNOP();

	return fbound;
}

a = 20
var obj = {
	a: 10,
}
function fun(prop1, prop2) {
	console.log(this.a)
	console.log(prop1)
	console.log(prop2)
}

fun('X', 'Y')

newFun = fun.bind2(obj, 'A')
newFun('B')
