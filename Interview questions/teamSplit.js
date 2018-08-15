const length = [10, 10]
const array = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,1,0,1,0,0,0],
  [0,1,0,0,0,0,0,1,0,1],
  [1,0,0,0,0,0,0,0,1,1],
  [0,0,0,1,1,1,0,0,0,1],
  [0,0,0,0,0,0,1,0,1,1],
  [0,1,1,0,0,0,0,0,0,0],
  [0,0,0,1,0,1,0,0,0,0],
  [0,0,1,0,0,1,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
]
let teamsNum = 0
let maxNum = 0

function map() {  
  for(let row = 0; row < length[0]; row++) {
    for(let col = 0; col < length[1]; col++) {
      if(array[row][col]) {
        isATeam(row, col, 1)
        teamsNum++
        return
      }
    }
  }
}
map()
  

function isATeam(row, col, numbers) {
  array[row][col] = 0
  if(maxNum < numbers) maxNum = numbers
  let isHave = false
  for(let i = row-1;i<=row+1;i++) {
    for(let j = col-1;j<=col+1;j++) {
      if(array[i] && array[i][j] === 1) {
        isATeam(i,j,numbers+1)
        isHave = true
      }
    }
  }
  if(!isHave) {
    map()
  }
}

console.log(teamsNum)
console.log(maxNum)






