function readline() {
	return readline.lines[readline.Hindex++]
}
readline.input = `
/a/././b//../../c
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
	console.log(msg)
}


const inputPath = readline().split('')
inputPath.push('/')
const pathStack = ['']
while(1) {
	if (inputPath[0] !== '/')
		break;
	inputPath.shift()
}
for (let index = 0; index < inputPath.length; index) {
	if(inputPath[index++] === '/') {
		let theItem = inputPath.splice(0, index)
		theItem.pop()
		theItem = theItem.join('')
		if(theItem === '..') {
			pathStack.pop()
		} else if(theItem !== '' && theItem !== '.') {
			pathStack.push(theItem)
		}
		index = 0
	}
}
print(pathStack.join('/') || '/')