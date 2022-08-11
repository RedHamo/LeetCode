/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let hash = {}
    let hash2 = {}
    pattern = pattern.split("")
    s = s.split(" ")
    if(pattern.length!=s.length) return false;

    let len = pattern.length;
    for(let i=0; i<len; i++){
        if(!hash[pattern[i]]){
            hash[pattern[i]] = s[i]
        }else{
            if(hash[pattern[i]]!=s[i]) return false;
        }
        if(!hash2[s[i]]){
            hash2[s[i]] = pattern[i]
        }else{
            if(hash2[s[i]]!=pattern[i]) return false;
        }
    }
    return true;
};
// @lc code=end


