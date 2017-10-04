function fun(n,o) {
  console.log(o);
  return {
    fun:function(m) {
      return fun(m,n)
    }
  }
}
var b = fun(0).fun(1).fun(2);