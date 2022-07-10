/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    return string == string.split("").reverse().join("")
};
// @lc code=end


