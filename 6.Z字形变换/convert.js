/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const cha = numRows * 2 - 2;
    const ans = [];
    for (let i = 0; i < numRows; i++) { // 枚举矩阵的行
        for (let j = 0; j < s.length - i; j += cha) { // 枚举每个周期的起始下标
            ans.push(s[j + i]); // 当前周期的第一个字符
            if (0 < i && i < numRows - 1 && j + cha - i < s.length) {
                ans.push(s[j + cha - i]); // 当前周期的第二个字符
            }
        }
    }
    return ans.join('');
};
// @lc code=end

