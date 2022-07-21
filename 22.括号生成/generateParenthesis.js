/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const tar = []
    const bfs = (str, left, right) => {
      if (str.length === n * 2) {
        tar.push(str)
      }
      if (left < n) {
        bfs(str + '(', left + 1, right)
      }
      if (right < left) {
        bfs(str + ')', left, right + 1)
      }
    }
    bfs('', 0, 0)
    return tar
};
// @lc code=end


