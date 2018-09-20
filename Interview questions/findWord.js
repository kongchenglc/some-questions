function readline() {
	return readline.lines[readline.Hindex++]
}
readline.input = `
5 5 3
hello help high
p a b h m
f h e c p
o i l l h
b g h o n
h x c m l
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
	console.log(msg)
}


const inputNum = readline().split(' ')
const lineLength = inputNum.pop()
const words = readline().split(' ')
const letterArr = []
for (let i = 0; i < inputNum[0]; i++) {
	letterArr.push(readline().split(' '))
}
words.map(word => {
	let theXY = findLetter(word.split('')[0], word)
})

function findLetter(letter, word) {
	letterArr.map((row, x) => {
		row.map((col, y) => {
			if(letterArr[x][y] === letter) {
				let theWord = word
				theWord = theWord.split('')
				theWord.shift()
				findLoop(x, y, theWord) && print(word)
			}
		})
	})
}

function findLoop(x, y, word) {
	if(word.length === 0) {
		return true
	} else {
		if(letterArr[x][y+1] === word[0]) {
			word.shift()
			return findLoop(x, y+1, word)
		}
		if(letterArr[x][y-1] === word[0]) {
			word.shift()
			return findLoop(x, y-1, word)
		}
		if(letterArr[x+1] && letterArr[x+1][y] === word[0]) {
			word.shift()
			return findLoop(x+1, y, word)
		}
		if(letterArr[x-1] && letterArr[x-1][y] === word[0]) {
			word.shift()
			return findLoop(x-1, y, word)
		}
	}
}




