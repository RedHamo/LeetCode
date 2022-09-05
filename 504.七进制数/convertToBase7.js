/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num==0) return "0"
    let bit = 7;
    let flag = "";
    if(num<0){
        num = -num
        flag = "-"
    }
    let res = "";
    while(num != 0){
        let el = num%bit;
        res =  el + res;
        num = ~~(num/bit);
    }
    return flag + res;
};
// @lc code=end


