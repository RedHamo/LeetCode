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
    accounts.forEach((o,i)=>{
        accounts[i] = o.reduce((a,b)=> a+b,0)
    });
    return Math.max(...accounts)
};
// @lc code=end

