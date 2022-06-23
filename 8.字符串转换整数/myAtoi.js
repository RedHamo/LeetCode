/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let reg = /^\s*([\+-]?\d+).*$/;
    if (!reg.test(s)) return 0;
    s = s.replace(reg,"$1")
    return s >= 0 ? Math.min(s, 2**31 - 1) : Math.max(s, -(2**31))
};
// @lc code=end

