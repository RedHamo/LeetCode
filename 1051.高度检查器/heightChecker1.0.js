/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    let expected = [...heights].sort((a,b)=>a-b);
    let sum = 0;
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] != heights[i]) sum++;
    }
    return sum;
};
// @lc code=end

