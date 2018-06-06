//530. 二叉搜索树的最小绝对差
//给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。

//搜索树即排序树、查找树，中序遍历完为有序数列

var getMinimumDifference = function(root) {
    let mapArr = []
    let minNum = 0
    
    function map(root) {
        if(root) {
            map(root.left)
            mapArr.push(root.val)
            map(root.right)
        }
    }
    
    map(root)  
    minNum = mapArr[mapArr.length - 1]
    mapArr.map((item, index) => {
        let theAbs = Math.abs(mapArr[index]-mapArr[index-1])
        if( index!==0 && minNum > theAbs) {
            minNum = theAbs
        }
    })
    
    
    return minNum
};