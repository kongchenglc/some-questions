// js实现私有成员的几种方式（对象的私有数据）

// 基于闭包的实现（特权函数存在于实例中，而不是原型链上）
function Person(name) {
	var _name = name;
	this.getName = function(){
		return _name;
	}
	this.setName = function(val) {
		_name = val
	}
}
var obj = new Person(1)
console.log(obj.getName())	// 1
obj.setName(2)
console.log(obj.getName())	// 2


console.log('---------------------')


// 基于symbol
// 利用Symbol类型的属性不能通过点操作符访问的特性
var MyClass = (function() {
	var symbolKey = Symbol('val') // 每次调用会产生一个唯一的key
	function MyClass() {
		this[symbolKey] = 1
	}
	MyClass.prototype.getVal = function() {
		return this[symbolKey]
	};
	MyClass.prototype.setVal = function(val) {
		return this[symbolKey] = val
	};
	return MyClass
})()

var obj = new MyClass()
console.log(obj.getVal())	// 1
obj.setVal(2)
console.log(obj.getVal())	// 2


console.log('---------------------')


// 基于强引用散列表的实现
// 给每个实例新增一个唯一的标识符

// 1.使用自执行函数创建Person类，变量privateData和privateId被所有实例共享；
// 2.privateData用来储存每个实例的私有属性name的key-value，privateId用来分配每个实例的唯一标识符_id；
// 3.方法getName存在于prototype上，被所有实例共享。
var Person = (function() {
	var privateData = {},
	privateId = 0


	function Person(name) {
		// defineProperty第三个参数 属性描述符：数据描述符和存取描述符(get\set)
		Object.defineProperty(this, "_id", {value: privateId++})

		privateData[this._id] = {
			name: name
		}
	console.log(privateData)
	}

	Person.prototype.getName = function() {
		return privateData[this._id].name
	}

	return Person
})()
var obj = new Person(3)
console.log(obj.getName())

var obj2 = new Person(4)
console.log(obj2.getName())


console.log('---------------------')


// 基于 WeakMap
// WeakMap结构与Map结构基本类似。 
// 区别是它只接受对象作为键名，不接受其他类型的值作为键名。键名是对象的弱引用，当对象被回收后，WeakMap自动移除对应的键值对，WeakMap结构有助于防止内存泄漏（存DOM）。 

var Person = (function() {
	var privateData = new WeakMap();

	function Person(name) {
		privateData.set(this, {name: name})
	}

	Person.prototype.getName = function() {
		return privateData.get(this).name
	}
	Person.prototype.setName = function(name) {
		return privateData.set(this, {name: name})
	}

	return Person
})()

var obj = new Person(1)
console.log(obj.getName())
obj.setName(2)
console.log(obj.getName())




// 总结：
// 1. 基于闭包、不能重复利用函数
// 2. 基于symbol：利用闭包给每个私有属性定义一个symbol，然后将值放在各自的this[symbol]中。取值在各自的this的[symbol]属性中去找。（将symbol和属性名对应）
// 3. 基于WeakMap： 利用闭包创建一个共用的WeakMap，将不同实例的this作为键，将所有私有属性放在一个对象中，作为值，取值时在WeakMap中根据this和键名来找。
//   （将对象本身和自己私有属性所组成的对象用WeakMap对应，然后在类共用的WeakMap中去找）
// 4. 基于散列表： 利用闭包创建一个共用的对象和一个字增id。为每个实例的this添加一个_id属性，这个属性在构造函数每次创建实例的时候都会自增，所以每个实例都有一个自己的_id，然后根据_id去共用找自己的私有属性组成的对象。

// 大概都是一个思想：不能直接访问，利用映射存储私有属性





















