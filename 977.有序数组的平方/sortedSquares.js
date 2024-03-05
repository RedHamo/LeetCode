/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map(o=>o*o).sort((a,b)=>a-b)    
};
