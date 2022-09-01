/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let res = 0 ;
    for(let i=1; i<timeSeries.length; i++){
        let du = timeSeries[i]-timeSeries[i-1];
        if(du>=duration) res += duration;
        else res += du;
    }
    res += duration;
    return res;
};
// @lc code=end


