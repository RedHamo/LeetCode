/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function (s) {
    const validPalindromic = (s, l, r) => {
        while (l < r) {
            if (s[l] != s[r]) return false;
            l++;
            r--;
        }
        return true;
    }
    if (s?.length < 2) return s;
    let maxLength = 1, begin = 0;
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i+1; j < s.length; j++) {
            if (j-i+1>maxLength && validPalindromic(s,i,j)) {
                maxLength = j-i+1;
                begin =i;
            }
        }
        
    }
    return s.substring(begin,begin+maxLength)

};
// @lc code=end

