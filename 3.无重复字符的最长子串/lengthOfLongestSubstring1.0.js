/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let temp = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        if (temp.indexOf(s[i]) >= 0) {
            temp.shift();
            i--;
        } else {
            temp.push(s[i]);
            max = Math.max(max, temp.length)
        }
    }
    return max;
};
// @lc code=end

