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
// 动态规划
// 要符合「最优子结构」，子问题间必须互相独立。
var coinChange = function(coins, amount) {
    // 确定 base case:amount == 0
    // 确定「状态」:目标金额 amount
    // 确定「选择」:所有硬币的面值
    // 明确 dp 函数/数组的定义

    // coins = [1, 2, 5], amount = 11
    // 状态转移方程就是dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    // https://xiaochen1024.com/video?id=6285dbf3ede03c002e46b1d5

    var dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for(let i= 0; i < dp.length; i++) {
        for(let coin of coins) {
            if(i - coin < 0) continue;
            dp[i] = Math.min(dp[i], dp[i-coin] + 1)
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount];
};


// @lc code=end

