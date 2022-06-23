/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    const thousands = ["", "M", "MM", "MMM"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens     = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones     = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let ans = [];
    ans.push(thousands[~~(num/1000)])
    ans.push(hundreds[~~(num%1000/100)])
    ans.push(tens[~~(num%100/10)])
    ans.push(ones[~~(num%10)])
    return ans.join("")
};
// @lc code=end

