// 461.汉明距离
//转成二进制后不一样的位数

var hammingDistance = function(x, y) {
  
    let result = 0;
    (x^y).toString(2).split('').map(item => item==='1'?result++:result);
    return result;
};
console.log(hammingDistance(1,4))