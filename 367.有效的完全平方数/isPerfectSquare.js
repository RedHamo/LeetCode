/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let low = 0;
    let high = ~~(num/2) + 1;
    while(low <= high) {
        let mid =  ~~((low +high)/2);
        let val = mid**2;
        if(val == num)  return true
        if(val > num) high = mid - 1;
        if(val < num) low = mid + 1;
    }
    return false
};
// @lc code=end


