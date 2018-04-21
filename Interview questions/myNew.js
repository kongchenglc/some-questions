/* 题目
c = new Class(args)
c = myNew(Class, args)
*/


function myNew(constr, argumen) {
	let obj = Object.create(constr.prototype)
	return constr.apply(obj, argumen)
}