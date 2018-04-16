/*
{
    let obj = {};
    let song = '发如雪';
    obj.singer = '周杰伦';

    Object.defineProperty(obj, 'music', {
        // 1. value: '七里香',
        configurable: true, // 2. 可以配置对象，删除属性
        // writable: true,         // 3. 可以修改对象
        enumerable: true, // 4. 可以枚举
        // ☆ get,set设置时不能设置writable和value，它们代替了二者且是互斥的
        get() { // 5. 获取obj.music的时候就会调用get方法
            return song;
        },
        set(val) { // 6. 将修改的值重新赋给song
            song = val;
        }
    });

    // 下面打印的部分分别是对应代码写入顺序执行
    console.log(obj); // {singer: '周杰伦', music: '七里香'}  // 1

    delete obj.music; // 如果想对obj里的属性进行删除，configurable要设为true  2
    console.log(obj); // 此时为  {singer: '周杰伦'}

    obj.music = '听妈妈的话'; // 如果想对obj的属性进行修改，writable要设为true  3
    console.log(obj); // {singer: '周杰伦', music: "听妈妈的话"}

    for (let key in obj) {
        // 默认情况下通过defineProperty定义的属性是不能被枚举(遍历)的
        // 需要设置enumerable为true才可以
        // 不然你是拿不到music这个属性的，你只能拿到singer
        console.log(key); // singer, music    4
    }

    console.log(obj.music); // '发如雪'  5
    obj.music = '夜曲'; // 调用set设置新的值
    console.log(obj.music); // '夜曲'    6
}
*/

//以上是Object.defineProperty用法

//实现一个Mvvm：

function Mvvm(options = {}) {
    this.$options = options;
    let data = this._data = this.$options.data;
    observe(data);
    //数据代理
    for(let key in data) {
        Object.defineProperty(this, key, {
            configurable: true,
            get() {
                return this._data[key];
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        })
    }
    Compile(options.el, this);
}

// 数据劫持
function observe(data) {
    if(!data || typeof data !== 'object') return;
    return new Observe(data);
}
function Observe(data) {
    let dep = new Dep();
    for(let key in data) {
        let val = data[key]
        observe(val)
        Object.defineProperty(data, key, {
            configurable: true,
            get() {
                dep.target && dep.addSub(Dep.target);
                return val
            },
            set(newVal) {
                if(val === newVal) {
                    return 
                }
                val = newVal
                observe(newVal)
                dep.notify()
            }
        })
    }
}


// 数据编译
function Compile(el, vm) {
    vm.$el = document.querySelector(el);
    let fragment = document.createDocumentFragment();

    while(child = vm.$el.firstChild) {
        fragment.appendChild(child);
    }

    function replace(frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g    

            // nodeType = 3 文本节点 2属性 1元素
            if(node.nodeType === 3 && reg.test(txt)) {
                let arr = RegExp.$1.split('.')
                let val = vm;   //viewModle
                arr.forEach(key => {
                    val = val[key]
                })
                node.textContent = txt.replace(reg, val).trim();

                new Watcher(vm, RegExp.$1, newVal => {
                    node.textContent = txt.replace(reg, newVal).trim();
                });
            }
            // 递归子节点
            if(node.childNodes && node.childNodes.length) {
                replace(node);
            }
        })

    }
    replace(fragment)
    vm.$el.appendChild(fragment)
}


// 发布订阅
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub(sub) {
        this.subs.push(sub);
    },
    notify() {
        this.subs.forEach(sub => sub.update());
    }
}


// 监听函数
function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
    Dep.target = this;
    let arr = exp.split('.');
    let val = vm;
    arr.forEach(key => {   // 取值
       val = val[key];     // 获取到this.a.b，默认就会调用get方法
    });
    Dep.target = null;
}
Watcher.prototype.update = function() {
    let arr = this.exp.split('.');
    let val = this.vm;
    arr.forEach(key => {    
        val = val[key];   // 通过get获取到新的值
    });
    this.fn(val);
}