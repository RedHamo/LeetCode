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
// 动态规划
// f(i)=max{f(i−1)+nums[i],nums[i]}
var maxSubArray = function (nums) {
    let pre = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(pre+nums[i],nums[i])
        pre = nums[i];
    }
    return Math.max(...nums)
};
// @lc code=end

