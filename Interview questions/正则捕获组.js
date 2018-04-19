let str = 'hello-world'
str = str.replace(/(-\w)/, $1 => {
    return $1.slice(1).toLocaleUpperCase()
})
console.log(str)
console.log(RegExp.$_)
console.log(RegExp.$1)