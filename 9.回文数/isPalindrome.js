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
// 数字反转一半
 var isPalindrome = function(x) {
    // 十的倍数不是回文数
    // !(x % 10):x非十的倍数
    // && x:x非0
    if(!(x % 10) && x) return false;
    let ret = 0;
    while (x > ret) {
        ret = ret*10 + x%10
        x = ~~(x/10);
    }
    if (ret > x) ret = ~~(ret/10);
    return ret === x;
};
// @lc code=end

