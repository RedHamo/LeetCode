/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let res = 0;
    for(let i=0; i<32; i++){
        let xi = x>>i;
        let yi = y>>i;
        if(xi<=0&&yi<=0) break;
        if((xi&1)!=(yi&1)) res++;
    }
    return res;
};
// @lc code=end


