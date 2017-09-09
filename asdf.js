const a = [];
for(let i = 0; i<10;i++) {
  a[i] = function() {
    console.log(i);
  };
}
a[1]();



setTimeout(function() {
  console.log(1);
},0);
Promise.resolve(function() {
    console.log(2);
});
new Promise(function(resolve) {
    console.log(3);

});
  console.log(4);