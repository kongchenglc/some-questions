const input = `
2
0 0
0 3
`
const lines = input.split('\n').filter(item => item)
let Hindex = 0;
function readline() {
	return lines[Hindex++]
}
function print(msg) {
	console.log(msg)
}