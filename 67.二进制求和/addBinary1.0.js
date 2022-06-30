/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    var a = '0b' + a;
    var b = '0b' + b;
    var sum = BigInt(a) + BigInt(b);
    return sum.toString(2);
};
// @lc code=end

