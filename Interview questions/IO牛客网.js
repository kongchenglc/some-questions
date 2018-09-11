function readline() {
	return readline.lines[readline.Hindex++]
}
readline.input = `
4
3 1 2 3
4 1 1 1 3
2 2 3
2 3 4
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
	console.log(msg)
}