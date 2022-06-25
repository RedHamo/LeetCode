/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let ans = "";
    let minlen = Math.min(...(strs.map(o=>o.length)))
    for(let i=0; i<minlen; i++){
        ans+=strs[0][i]
        let res = true;
        for(let j=0; j<strs.length; j++){
            let reg = new RegExp(`^${ans}.*$`).test(strs[j])
            if (!reg) {
                res = false;
                break;
            };
        }
        if (!res) return ans.substring(0,ans.length-1)
    }
    return ans;
};
// @lc code=end

