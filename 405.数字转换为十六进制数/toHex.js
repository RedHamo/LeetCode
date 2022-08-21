/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num==0) return "0";
    let hash = {0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10:"a", 11:"b", 12:"c", 13:"d", 14:"e", 15:"f"}
    let ret = ""
    for(let i=0; i<8; i++){
        let temp = (num>>(4*i)) & 0xf;
        ret = hash[temp] + ret;
    }
    return ret.replace(/^0*(.*)$/, "$1");
};
// @lc code=end


