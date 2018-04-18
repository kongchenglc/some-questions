let A = '00010001'
let B = '????'
let result = 0

function find(str) {
	let where = str.indexOf('?')
	if(where !== -1) {
		let arr = str.split('')
		arr.splice(where, 1, '0')
		find(arr.join(''))
		arr.splice(where, 1, '1')
		return find(arr.join(''))
	} else {
		if(A.indexOf(str) !== -1) {
			result++
		}
	}
}
find(B)

console.log(result)