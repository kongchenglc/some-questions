const num1 = [1,2,3]
const num2 = [2,5,6]
let num = []

let index1 = 0, index2 = 0
while(true) {
	if (index1 === num1.length && index2 === num2.length) {
		break
	} else if (index1 === num1.length || index2 === num2.length) {
		num = num.concat(num1.slice(index1), num2.slice(index2))
		break
	} else {
		if(num1[index1] < num2[index2]) {
			num.push(num1[index1++])
		} else {
			num.push(num2[index2++])
		}
	}
}

console.log(num)