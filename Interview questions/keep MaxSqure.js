let line = 0
const	lines = [
	'4 5',
	'1 0 1 0 0',
	'1 0 1 1 1',
	'1 1 1 1 1',
	'1 0 0 1 0'
]
function readline() {
	return lines[line++]
}
//readline 函数

const line1 = readline().split(' ')
const row = line1[0], col = line1[1]
let squre = []

for(let i = 0; i < row; i++) {
	squre.push(readline().split(' '))
}
squre = squre.map(item => {
	return item.map(i => {
		return Number(i)
	})
})

let result = 0

for(let i = 0; i < row; i++) {
	for(let j = 0; j < col; j++ ) {
		let maxArea = test(i, j)
		if(result < maxArea) {
			result = maxArea
		} 
	}
}

function test(i, j) {
	let maxArea = 0
	for(let endRow = i; endRow < row; endRow++) {
		for(let endCol = j; endCol < col; endCol++) {
			let resu = isOk(i, endRow, j, endCol)
			if(resu && resu > maxArea) {
				maxArea = resu
			}
		}
	}
	return maxArea
}

function isOk(sRow, eRow, sCol, eCol) {
	for(let i = sRow; i <= eRow; i++) {
		for(let j = sCol; j <= eCol; j++) {
			if(squre[i][j] !== 1) {
				return false
			}
		}
	}
	return (eRow - sRow + 1) * (eCol - sCol + 1)
}

// print(result)
console.log(result)