/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ret = new Array(rowIndex + 1).fill(1)
    for(let i=1; i<=rowIndex; i++){
        ret[i] = ret[i - 1] * (rowIndex - i + 1) / i;
    }
    return ret;
};
// @lc code=end


