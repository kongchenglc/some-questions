function readline() {
	return readline.lines[readline.Hindex++]
}
readline.input = `
2
toutiaohao
toutiaohao
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
	console.log(msg)
}



let num = Number(readline())
const inputList = []
const result = []
while(num--) {
	inputList.push(readline())
}
inputList.map((item, theIndex) => {
	for (let i = 0; i < item.length; i++) {
		let theProStr = item.slice(0, i+1)
		console.log(theProStr)
		if(inputList.every((item, index) => index === theIndex || item.indexOf(theProStr) !== 0)) {
			result.push(theProStr)
			break
		}
	}
})
result.map(print)