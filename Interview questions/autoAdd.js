//求一个函数，自增，不污染全局变量


function getUid() {
	if(getUid.value) {
		getUid.value++
		return getUid.value
	} else {
		getUid.value = 1
		return getUid.value
	}
}

let a = {}, b = {}, c = {}
a.id = getUid()
b.id = getUid()
c.id = getUid()
console.log(a,b,c)