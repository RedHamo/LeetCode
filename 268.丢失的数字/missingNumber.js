/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    let last = nums[0];
    if(last>0) return 0;
    for(let item of nums){
        if(last==item) continue;
        if(last+1 != item) return last+1;
        last = item;
    }
    return last+1;
};
// @lc code=end


