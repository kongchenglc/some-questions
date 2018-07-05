//26. 删除排序数组中的重复项
//原地去重

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let theNum
    
    for(let i = 0; i < nums.length;) {
        if(nums[i]===theNum) {
            nums.splice(i, 1)
        } else {
            theNum = nums[i]
            i++
        }
    }
    
    
    return nums.length
};