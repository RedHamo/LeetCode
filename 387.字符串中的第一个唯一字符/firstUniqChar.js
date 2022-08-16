/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
    for(let item of s){
        if(hash[item]){
            hash[item]++;
        }else{
            hash[item] = 1;
        }
    }
    for(let i in s){
        if(hash[s[i]]==1) return i;
    }
    return -1;
};
// @lc code=end


