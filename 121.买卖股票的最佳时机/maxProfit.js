/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = prices[0],
    min = prices[0],
    ret = 0;
    for(let i=0; i< prices.length-1; i++){
        
        if(max<prices[i+1]) {
            max = prices[i+1];
            for(let j=i+1; j< prices.length; j++){
                ret = Math.max(ret, prices[j]-prices[i])
            }
            continue;
        }
        if(min>prices[i]) {
            min = prices[i];
            for(let j=i+1; j< prices.length; j++){
                ret = Math.max(ret, prices[j]-prices[i])
            }
        }
    }
    return ret;
};
// @lc code=end


