function readline() {
	return readline.lines[readline.Hindex++]
}
readline.input = `
7
34
66
72
6
32
33
86
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
	console.log(msg)
}


const nums = Number(readline())
const list = []

for (let i = 0; i < nums; i++) {
	list[i] = readline()
}
list.map(item => {
	Number(item) % item.split('').reduce((result, value) => {
		return result + Number(value)
	},0) === 0 
	? print('Yes')
	: print('No')
})