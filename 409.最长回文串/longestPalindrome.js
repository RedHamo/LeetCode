/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {}
    for(let i=0; i<s.length; i++){
        if(hash[s[i]]){
            hash[s[i]]++;
        }else{
            hash[s[i]] = 1;
        }
    }

    let len = 0;
    let lenplus = 0;
    for(let i in hash){
        let el = hash[i]
        if(el%2==1) lenplus=1;
        len += el>>1;
    }
    return len*2 + lenplus;
};
// @lc code=end


