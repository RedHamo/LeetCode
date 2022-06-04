/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let max = 0;
    let sum;
    for (let i = 0; i < accounts.length; i++) {
        sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j]
        }
        if(sum>max) max=sum
    }
    return max;
};
// @lc code=end

