/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 1. 纵向扫描
// 时间复杂度：O(mn) m 表示字符串数组中所有字符串的平均长度，n 表示字符串数组的大小
// 空间复杂度：O(1)
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    const rows = strs.length;
    const cols = strs[0].length;
    for (let i = 0; i < cols; i++) {
        const firstChar = strs[0][i];
        for (let j = 1; j < rows; j++) {
            if (strs[j].length == i || strs[j][i] != firstChar) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};
// @lc code=end

