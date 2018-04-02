let inputA = '4 4'.split(' ')
let	netNode = Number(inputA[0])
let netLine = Number(inputA[1])
let lineArray = []

// for(let i = 0; i < netLine; i++) {
// 	lineArray.push(read_line().split(' ').map(item => {
//           	return Number(item)
//           }))
// }

const connect = [];
let theLayer = 0
for (let i = 0; i < netNode; i++) {
	connect[i] = i;
}

lineArray.map(line => {
	if(connect[line[0]] > connect[line[1]]) {
		connect.map((node, index) => {
			if(connect[node] === connect[line[0]]) {
				connect[index] = connect[line[1]]
			}
		})
	} else if(connect[line[0]] < connect[line[1]]) {
		connect.map((node, index) => {
			if(connect[node] === connect[line[1]]) {
				connect[index] = connect[line[0]]
			}
		})
	}
})


let inputB = 2
let testArray = ['1 2','3 0']
let result = 0

// for(let i = 0; i < inputB; i++) {
// 	testArray.push(read_line().split(' ').map(item => {
//           	return Number(item)
//           }))
// }

testArray.map(item => {
	if(connect[item[0]] === connect[item[1]]) {
		result++;
	}
})

console.log(result);