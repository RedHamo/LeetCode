/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let arr = [...new Set(nums)].sort((a,b)=>b-a);
    return arr.length<=2 ? Math.max(...arr) :arr[2];
};
// @lc code=end


