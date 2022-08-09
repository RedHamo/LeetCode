/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    let hash = {}
    for(let item of s){
        if(hash[item]){
            hash[item]++;
        }else{
            hash[item] = 1;
        }
    }
    for(let item of t){
        if(hash[item]&&hash[item]!=0){
            hash[item]--;
        }else{
            return false;
        }
    }
    return true;
};
// @lc code=end


