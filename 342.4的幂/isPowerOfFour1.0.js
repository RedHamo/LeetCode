/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    return n>0 && (n&(n-1))==0 && (n & 0xaaaaaaaa)==0;
};
// @lc code=end


