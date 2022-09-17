/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let temp=0;
    for(let i=0,hash = {}; i<candyType.length; i++){
        if(hash[candyType[i]]==1) continue;
        temp++;
        if(temp>=candyType.length/2) return temp;
        hash[candyType[i]]=1;
    }
    return temp;
};
// @lc code=end


