//不用第三方变量交换值，数值和对象都可以交换
var a={key:2};
var b={key:3};
[a,b]=[b,a];		//解构赋值
console.log("a="+a.key,"b="+b.key)