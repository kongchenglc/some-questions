var generateParenthesis = function (n) {
  const result = [];
  (function loop(theStr, theNum) {
    if (theNum === n + 1) {
      result.push(theStr)
    } else {
      for (var preIndex = 0; preIndex < theNum * 2 - 1; preIndex++) {
        for (let endIndex = preIndex + 1; endIndex < theNum * 2; endIndex++) {
          let nextStr = theStr.slice(0, preIndex) + '(' + theStr.slice(preIndex, theStr.length)
          nextStr = nextStr.slice(0, endIndex) + ')' + nextStr.slice(endIndex, nextStr.length)
          loop(nextStr, theNum + 1)
        }
      }
    }
  })('', 1)
  return [...new Set(result)]
};


var generateParenthesis = function (n) {
  const result = [];
  (function loop(left, right, theStr) {
    if (left + right === n * 2) {
      result.push(theStr)
    } else {
      if (left < n) {
        loop(left + 1, right, theStr + '(')
        if (right < left) {
          loop(left, right + 1, theStr + ')')
        }
      } else {
        loop(left, right + 1, theStr + ')')
      }
    }
  })(0, 0, '')
  return result
};
console.log(generateParenthesis(3))