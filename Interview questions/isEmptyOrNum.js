function readline() {
    return readline.lines[readline.Hindex++]
}
readline.input = `
["",0,{"name":"sina"},[1,2],"me","15.8",null,{},[]]
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
    console.log(msg)
}


let arr = JSON.parse(readline())
function parse(arr) {
    const result = {
        isEmpty: [],
        likeNumber: [],
    }
    arr.map(item => {
        if(JSON.stringify(item) !== '[]' && item !== '' && item !== null && !isNaN(Number(item))) {
            result.likeNumber.push(item)
        } else if(item === null || item == false || JSON.stringify(item) === '{}') {
            result.isEmpty.push(item)
        }
    })
    return JSON.stringify(result)
}
print(parse(arr))
//{"isEmpty":["",null,{}],"likeNumber":[0,"15.8"]}