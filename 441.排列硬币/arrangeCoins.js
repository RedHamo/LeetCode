/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 0;
    while(true){
        let val = i*(i+1)/2
        if(val>n) return i-1;
        i++;
    }
};
// @lc code=end


