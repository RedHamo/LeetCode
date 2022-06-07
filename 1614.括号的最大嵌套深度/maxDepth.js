/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let count = 0;
    let max = 0;
    let temp = ""
    while (s.length) {
        temp = [s[0]]
        s = s.substring(1)
        if ("(" == temp) {
            count++;
        }else if(")" == temp){
            max = Math.max(max,count)
            count--;
        }
    }
    return max;
};
// @lc code=end