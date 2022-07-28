/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // 利用位运算 n = n & (n - 1) 清零最低位1；
    // n = n & (n - 1)
    // 当n = 110100,
    // n-1 = 110011;
    // 即将最低位1即其后取反；
    // 与后得：110000
    let ret = 0;
    while(n!=0) {

        n = n & (n-1)
        ret++;
    }
    return ret;
};
// @lc code=end


