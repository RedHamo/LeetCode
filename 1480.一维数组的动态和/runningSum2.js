/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    nums.reduce((a,b,i)=>{nums[i]=a+b; return a+b;},0)
    return nums;
};
// @lc code=end

