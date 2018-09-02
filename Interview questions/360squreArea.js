const lines = [
'1 1',
'0 3'
]
let Hindex = 0;
function read_line() {
	return lines[Hindex++]
}



const nums = 2
// const nums = readInt()
const theX = []
const theY = []
let result = 0

for(let i = 0; i < nums; i++) {
	let theDot = read_line().split(' ')
	theX.push(theDot[0])
	theY.push(theDot[1])
}
let x = Math.max(...theX) - Math.min(...theX)
let y = Math.max(...theY) - Math.min(...theY)
result = Math.max(x, y)
console.log(result * result)
// print(result * result)