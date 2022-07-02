/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let ans = 1;
    for(let i=1; i<=x; i++){
        if(i*i > x) return ans;
        ans = i;
        if(i*i == x) return ans;
    }
    return 0;
};
// @lc code=end

