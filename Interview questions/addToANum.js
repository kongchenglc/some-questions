function readline() {
    return readline.lines[readline.Hindex++]
}
readline.input = `
1,2,3,5,8|10
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
    console.log(msg)
}

const input = readline().split('|')
const nums = input[0].split(',').map(Number).sort((i,j) => i-j)
const theNum = Number(input[1])
let result = 0
let i = 0, j = nums.length - 1;
while(i <= j) {
	let sum = nums[i] + nums[j]
	if(sum === theNum) {
		result++
		i++
		j--
	} else if(sum < theNum) {
		i++
	} else {
		j--
	}
}
print(result)
