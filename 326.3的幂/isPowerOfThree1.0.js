/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==1) return true;
    if(n<3) return false;
    while(n!=3){
        if(n==3||n==9) return true;
        if(n<10) return false;

        n = n/3;
    }
    return true;
};
// @lc code=end


