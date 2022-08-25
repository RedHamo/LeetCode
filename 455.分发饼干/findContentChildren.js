/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>b-a)
    s.sort((a,b)=>b-a)

    let result = 0;
    for(let i=0; i<g.length; i++){
        if(s.length==0) break;
        if(g[i]<=s[0]) {
            result++;
            s.shift()
        }
    }
    return result;
};
// @lc code=end


