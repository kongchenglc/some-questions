let obj = {};
let song = '发如雪'; 
obj.singer = '周杰伦';  

Object.defineProperty(obj, 'music', {
    // 1. value: '七里香',
    configurable: true,     // 2. 可以配置对象，删除属性
    // writable: true,         // 3. 可以修改对象
    enumerable: true        // 4. 可以枚举
    // ☆ get,set设置时不能设置writable和value，它们代替了二者且是互斥的
    get() {     // 5. 获取obj.music的时候就会调用get方法
        return song;
    },
    set(val) {      // 6. 将修改的值重新赋给song
        song = val;   
    }
});

// 下面打印的部分分别是对应代码写入顺序执行
console.log(obj);   // {singer: '周杰伦', music: '七里香'}  // 1

delete obj.music;   // 如果想对obj里的属性进行删除，configurable要设为true  2
console.log(obj);   // 此时为  {singer: '周杰伦'}

obj.music = '听妈妈的话';   // 如果想对obj的属性进行修改，writable要设为true  3
console.log(obj);   // {singer: '周杰伦', music: "听妈妈的话"}

for (let key in obj) {    
    // 默认情况下通过defineProperty定义的属性是不能被枚举(遍历)的
    // 需要设置enumerable为true才可以
    // 不然你是拿不到music这个属性的，你只能拿到singer
    console.log(key);   // singer, music    4
}

console.log(obj.music);   // '发如雪'  5
obj.music = '夜曲';       // 调用set设置新的值
console.log(obj.music);   // '夜曲'    6