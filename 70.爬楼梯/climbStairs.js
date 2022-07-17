/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// fn[i] = fn[i-1] + fn[i-2]
var climbStairs = function(n) {
    let dp = [1,1]
    for(let i=2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};
// @lc code=end


