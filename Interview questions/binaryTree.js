function node(val) {
	this.val = val
	this.left = null
	this.right = null
}

let root = new node(1)
root.left = new node(2)
root.right = new node(3)
root.left.left = new node(4)
root.right.left = new node(6)
root.right.right = new node(7)
root.right.left.left = new node(8)

// 非递归中序遍历1
!function(root) {
	const stack = []
	let p = root
	while(p || stack.length) {
		while(p) {
			// 先序遍历在这里输出
			stack.push(p)
			p = p.left
		}
		if(stack.length) {
			p = stack.pop()
			console.log(p.val)
			p = p.right
		}
	}
}(root)


// 非递归中序遍历2
!function(root) {
	const stack = []
	let p = root
	while(p || stack.length) {
		if(p) {
			stack.push(p)
			p = p.left
		} else {
			p = stack.pop()
			console.log(p.val)
			p = p.right
		}
	}
}(root)


