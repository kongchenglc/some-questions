// 0% 报错数组越界或者语法错误
const lines = [
'10',
'0',     //1
'5 3 0',     //2
'8 4 0',     //3
'9 0',     //4
'9 0',     //5
'3 0',     //6
'0',     //7
'7 9 0',     //8
'0',
'9 7 0',
]
let Hindex = 0;
function readline() {
	return lines[Hindex++]
}


// start

const nums = Number(readline())
const twoArr = [ nums ]
const teamArr = new Array(nums + 1)
let result = 0
teamArr.fill(0)
teamArr[0] = 1

for(let i = 0; i < nums; i++) {
	twoArr.push(readline().split(' ').map(item => {
		return Number(item)
	}))
}

function mapList(index) {
	if(teamArr[index] === 1 || index === 0) {
		return
	}
	teamArr[index] = 1	
	twoArr[index].map(item => {
		mapList(item)
	})
}

teamArr.map((item ,index) => {
	if(item === 0) {
		let isAdd = twoArr[index].some(num => {
			if(num === 0) {
				return
			}
			return teamArr[num] === 1
		})
		if(!isAdd) {
			result++
		}
		mapList(index)
	}
})
// print(result)

// end
console.log(result)