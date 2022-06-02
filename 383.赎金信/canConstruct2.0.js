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
    let hash = {}
    for (let i = 0; i < magazine.length; i++) hash[magazine[i]] = hash[magazine[i]] ? (hash[magazine[i]] + 1) : 1;
    for (let i = 0; i < ransomNote.length; i++) {
        if ((hash[ransomNote[i]] || 0) < 1) return false;
        hash[ransomNote[i]]--;
    }
    return true
};
// @lc code=end

