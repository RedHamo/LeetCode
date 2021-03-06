/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    for (let i = 0; i < ransomNote.length; i++) {
        if (magazine.indexOf(ransomNote[i]) < 0) return false;
        magazine = magazine.replace(ransomNote[i], '')
    }
    return true
};
// @lc code=end

