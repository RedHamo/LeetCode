/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    columnTitle = columnTitle.split("");
    let base = 'A'.charCodeAt()-1;
    let ret = 0;
    while(columnTitle.length>0){
        let item = columnTitle.shift();
        let num = item.charCodeAt()-base;
        ret = ret*26 + num;
    }
    return ret;
};
// @lc code=end


