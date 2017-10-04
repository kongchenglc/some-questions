//js的赋值方式
//js中变量的基本类型和引用类型保存方式是不同的，这也就导致变量复制时也就不同了。
//如果从一个变量向另一个变量复制基本类型的值时，会将前者的值克隆一个，然后将克隆的值赋值到后者
//因此这两个值是完全独立的，只是他们的value相同而已
var bb = 1;
//参数的传递都是一个新的变量复制原来的值
function aa(bb) {  
	bb = 2;
	console.log(bb);
};
aa(bb);            //2
console.log(bb);   //1


var bbb = {aaa: 3};
//参数的传递都是一个新的变量复制原来的值，但是引用类型相当于复制了地址，还是同一段内存
function aaa(bbb) {  
	// bbb = {aaa: 4};			//这样是更改了地址，外边输出3
	bbb.aaa = 4;			//这样是修改原对象，外边输出4
	console.log(bbb);
};
aaa(bbb);
console.log(bbb);