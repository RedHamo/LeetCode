/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let ret = new Array(2).fill(~~Math.sqrt(area))
    while(true){
        let l = ret[0],r = ret[1];
        if(l*r==area) return ret;
        if(r==1) return [area,1]
        if(l*r > area) ret[1]--
        else ret[0]++;
    }
};
// @lc code=end


