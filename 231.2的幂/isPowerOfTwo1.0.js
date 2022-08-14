/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<1) return false;
    while(true){
        if(n==1) break;
        if(~~n!=n) break;
        n = n/2;
    }
    return n==1;
};
// @lc code=end


