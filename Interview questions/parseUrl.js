function read_line() {
	return read_line.lines[read_line.Hindex++]
}
read_line.input = `
parseQueryString('https://www.didichuxing.com/path?key1=a&key2=123&key_3=key2#asd/d/d/d=s', 'key2')
`
read_line.lines = read_line.input.split('\n').filter(item => item)
read_line.Hindex = 0;
function print(msg) {
	console.log(msg)
}


let parseQueryString = function(url, key) {
//请在此处编写你的代码，其他部分请勿修改，否则不记分。
//begin
let str = url.split('?')[1].split('#')[0],
      items = str.split('&'),
      result = {}
      console.log(items)
  for(let i = 0, len = items.length; i <len; ++i){
    let res = items[i].split("=")
    result[res[0]] = res[1]
  }
  return result[key] || ""
//end
// 以下代码请勿修改
}
const _ret = eval(read_line());
print(_ret === "" ? "_EMPTY_" : _ret)