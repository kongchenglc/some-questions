//new是强行创建一个对象
var obj1 = new String("asd");
var obj2 = new String("asd");
//=""是判断前边是否有相同的字符串，有的话就调用，没有就创建
var obj3 = "asd";
var obj4 = "asd";
console.log(typeof obj1, obj2);
console.log(typeof obj3, obj4);
//对象（Date,Array）及普通对象通过指针指向的内存中的地址来做比较，所以==和===都返回false
console.log(obj1==obj2, obj1===obj2);
console.log(obj3==obj4, obj3===obj4);
console.log(obj1==obj3, obj1===obj3);
console.log(obj2==obj3, obj2===obj3);