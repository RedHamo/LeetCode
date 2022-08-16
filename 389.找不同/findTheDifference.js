/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash = {}
    for(let item of s){
        if(hash[item]){
            hash[item]++;
        }else{
            hash[item] = 1;
        }
    }
    for(let item of t){
        if(hash[item]==0||hash[item]==undefined) return item;
        hash[item]--;
    }
    return never;
};
// @lc code=end


