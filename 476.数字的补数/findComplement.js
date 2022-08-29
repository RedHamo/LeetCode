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
    let res = 1;
    let numbak = num;
    while(num){
        res<<=1;
        num>>=1;
    }
    return numbak ^ (res-1);
};
// @lc code=end


