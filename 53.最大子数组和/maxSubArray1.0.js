/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 之前和
// 当前值等于nums[i]
// 当前和等于max(当前值+之前和，当前值)
// 最大和等于max(最大和，当前和)
var maxSubArray = function (nums) {
    let max = nums[0];//最大值
    let current = nums[0];//上次计算的值
    for (let i = 1; i < nums.length; i++) {
        current = Math.max(current + nums[i], nums[i]);
        max = Math.max(current, max)
    }
    return max
};
// @lc code=end

