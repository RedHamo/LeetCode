/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let res = ""
    for(let i=s.length; i>0; i--){
        if(s[i-1]=="-") continue;
        if(res.length%(k+1)==k) res = "-" + res;
        res = s[i-1].toUpperCase() + res;
    }
    return res;
};
// @lc code=end


