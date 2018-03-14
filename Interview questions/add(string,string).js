function add(a,b) {
  var str1 = a.split('');
  var str2 = b.split('');
  var strL1 = a.length;
  var strL2 = b.length;
  if(strL1 > strL2) {
    max = str1;
    min = str2;
  } else {
    max = str2;
    min = str1;
  }
  while(max.length > min.length) {
  	min.unshift('0');
  }
  var maxL = max.length;
  var minL = min.length;
  console.log(min);
  console.log(max);
  for(var i = 1;i <= minL; i++) {
    var ad = parseInt(min[minL-i])+parseInt(max[maxL-i]);
    console.log('i'+ i + ad + '=' + parseInt(max[maxL-i]) + '+' + parseInt(min[minL-i]));
    if(ad >= 10) {
      max[maxL-i] = ad % 10;
      if(i === maxL) {
        max.unshift('1');
      } else {
        max[maxL-i-1] = Number(max[maxL-i-1]) + 1;
        console.log(Number(max[maxL-i]));
      }
    } else {
      max[maxL-i] = ad;
    }
    console.log('max' + max);
  }
  return max.join('');
}
console.log(add('999','1'));