/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArray = s.split(" ");
    let res = [];
    for(let i=0; i<sArray.length; i++){
        res.push(sArray[i].split("").reverse().join(""))
    }
    return res.join(" ")
};
// @lc code=end


