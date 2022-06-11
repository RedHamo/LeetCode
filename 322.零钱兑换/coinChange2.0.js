/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// dp[i] = Math.min(dp[i], dp[i - coin] + 1);
var coinChange = function (coins, amount) {
    let memo = { "0": 0 }
    let helper = (n) => {
        if (typeof memo[n] != "undefined") return memo[n];
        let min = Infinity;
        for (let coin of coins) {
            if (n - coin < 0) continue;
            min = Math.min(min, helper(n - coin) + 1)
        }
        memo[n] = min;
        return memo[n];
    }
    let ret = helper(amount);
    return ret == Infinity ? -1 : ret;
};
// @lc code=end

