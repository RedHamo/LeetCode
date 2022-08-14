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
    let calcNum = 4;
    return n>0 && (n&(n-1))==0 && n%(calcNum-1)==1;
};
// @lc code=end


