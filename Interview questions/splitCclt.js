function readline() {
	return readline.lines[readline.Hindex++]
}
readline.input = `
4
0 1 0 1 1 0 0 
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
	console.log(msg)
}


const length = readline()
let list = readline().split(' ').map(Number)

while(list[0] === 0) {
	list.shift()
}
while(list[list.length - 1] === 0) {
	list.pop()
}
list = list.join('').split('1').filter(item => item !== '')
print(list.reduce((result, item) => {
	return result * (item.length + 1)
},1))
