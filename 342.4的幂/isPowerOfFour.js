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
    if(n<1) return false;
    while(true){
        if(n==1) break;
        if(~~n!=n) break;
        n = n/4;
    }
    return n==1;
};
// @lc code=end


