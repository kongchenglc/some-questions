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