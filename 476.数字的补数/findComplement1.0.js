/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let res = "";
    while(num!=0){
        res = (num&1^1) + res;
        num = num>>1;
    }
    return parseInt(res, 2);
};
// @lc code=end


