let EventP = (() => {
    let clientList = {}, //订阅回调函数
        listen, //监听器
        trigger, //触发器
        remove;
    listen = (key, fn) => {
        if (!clientList[key]) {
            clientList[key] = [];
        }
        clientList[key].push(fn);
    };
    trigger = (...rest) => {
        let key = rest.shift(),
            fns = clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        fns.forEach(function(val, index) {
            val.apply(this, rest);
        });
    }
    remove = (key, fn) => {
        let fns = clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns && (fns.length = 0);
        } else {
            fns.forEach(function(val, index) {
                if (val == fn) {
                    fns.splice(index, 1);
                }
            });
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove,
    }
})();

EventP.listen('console', (info) => {
    console.log(info);
})


EventP.trigger('console', 'hello gcy'); //hello gcy