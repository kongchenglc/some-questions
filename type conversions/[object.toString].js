var a = {};
b = {key: 'b'};
c = {key: 'c'};
a[b] = 123;
//[]里的对象会调用toString方法
console.log(a.toString() ,b.toString(), c.toString());		//[object Object] [object Object] [object Object]
console.log(a);				//{[object Object]:123}
console.log(a[c]);			//123
console.log(a[b]);			//123
a[c] = 456;
console.log(a);				//{[object Object]:456}
console.log(a[c]);			//456
console.log(a[b]);			//456