/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let ret = "";
    while(columnNumber>0){
        let base = columnNumber%26;
        if(base==0) base=26;
        ret =  String.fromCharCode('A'.charCodeAt()-1+base) + ret;
        columnNumber-=base;
        columnNumber = ~~(columnNumber/26);
    }
    return ret;
};
// @lc code=end


