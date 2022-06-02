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
    let hash = {}
    let mList = magazine.split("")
    let rList = ransomNote.split("")
    for (let i = 0; i < mList.length; i++) {
        let val = hash[mList[i]];
        hash[mList[i]] = val ? (val + 1) : 1;;
    }
    for (let i = 0; i < rList.length; i++) {
        if (hash[rList[i]] >= 1) {
            hash[rList[i]]--;
        } else {
            return false;
        }
    }
    return true
};
// @lc code=end

