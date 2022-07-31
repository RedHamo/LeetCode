/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hashs = {},
    hasht = {}
    if(s.length!=t.length) return false;

    for(let i=0; i<s.length; i++){
        if(!hashs[s[i]]) hashs[s[i]]=i;
        if(!hasht[t[i]]) hasht[t[i]]=i;
    }
    
    for(let i=0; i<s.length; i++){
        if(hashs[s[i]]!=hasht[t[i]]) return false;
    }
    return true;
};
// @lc code=end


