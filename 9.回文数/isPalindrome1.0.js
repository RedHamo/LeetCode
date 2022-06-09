/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = "" + x;
    if (str.split("").reverse().join("") == str) return true;
    return false;
};
// @lc code=end

