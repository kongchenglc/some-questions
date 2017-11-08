判断一个变量是不是数组，使用`typeof`的话会得到`object`。
所以说`typeof`只能用来判断类型，判断基础数据类型还是`OK`的。
```javascript
let b = new Array(1,2,3,4,5);
let a = [1,2,3,4];
console.log(typeof(a));
```
可以使用`instanceof`判断变量是否是数组，这和使用`constructor`类似，但是这种判断方法有个缺陷，所判断的数组必须是在当前页面声明的，比如，一个页面（父页面）有一个框架，框架中引用了一个页面（子页面），在子页面中声明了一个`a`，并将其赋值给父页面的一个变量，这时判断该变量，`Array == a.constructor;`会返回`false`；
```javascript
console.log( a instanceof Array );
console.log(a.constructor==Array)
```
最后是说一种通用的方法，这种方法可以判断大多数类型：
```javascript
console.log(Object.prototype.toString.call(a)=='[object Array]');
```