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
// 双指针
 var isPalindrome = function(x) {
    if (x < 0) return false; //写了提高性能，不写代码简洁
    x = "" + x;
    let p = 0;
    let l = x.length-1;
    while(p<l){
        if (x[p++] != x[l--]) return false;
    }
    return true;
};
// @lc code=end

