//114. 二叉树展开为链表
//给定一个二叉树，原地将它展开为链表。


var flatten = function(root) {
    if(!root) {
        return
    }
    if(root.right) {
        flatten(root.right)
    }
    if(root.left) {
        flatten(root.left)
    }
    let temp = root.right
    root.right = root.left
    root.left = null
    
    while(root.right) {
        root = root.right
    }
    root.right = temp
    
};