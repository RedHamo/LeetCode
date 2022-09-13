/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>b-a)
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(i%2==1) sum+=nums[i]
    }
    return sum;
};
// @lc code=end
