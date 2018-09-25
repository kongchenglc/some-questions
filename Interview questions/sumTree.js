function readline() {
	return readline.lines[readline.Hindex++]
}
//前序遍历和中序遍历求和树
readline.input = `
10 -2 8 -4 6 7 5
8 -2 -4 10 7 6 5
`
readline.lines = readline.input.split('\n').filter(item => item)
readline.Hindex = 0;
function print(msg) {
	console.log(msg)
}


const pre = readline().split(' ').map(Number)
const middle = readline().split(' ').map(Number)

function treeNode(val) {
	this.val = val
	this.left = null
	this.right = null
	this.sum = 0
}

function rebuildTree(pre, middle) {
	if(pre && pre.length) {
		let root = new treeNode(pre.shift())
		let rootIndex = middle.indexOf(root.val)

		root.left = rebuildTree(pre.slice(0, rootIndex), middle.slice(0, rootIndex))
		root.right = rebuildTree(pre.slice(rootIndex), middle.slice(rootIndex + 1))
		return root
	}
}
let theTree = rebuildTree(pre, middle)

function getSumTree(root) {
	if(root) {
		root.sum = getSumTree(root.left) + getSumTree(root.right)
		return root.sum + root.val
	} else {
		return 0
	}
}
getSumTree(theTree)

const result = []
function mapTree(root) {
	if(root) {
		mapTree(root.left)
		result.push(root.sum)
		mapTree(root.right)
	}
}
mapTree(theTree)
print(result.join(' '))


