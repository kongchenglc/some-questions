let str = '121222asdfasdf3441234sdgwrg';

let a = str.match(/[0-9]+/g);


let result = [];
a.map(item => {
    result.push(Number(item));
})
console.log(a);

result.sort((a, b) => {
    return a > b ? -1 : 1;
})

console.log(result[0]);