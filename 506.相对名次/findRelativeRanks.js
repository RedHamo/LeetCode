/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let sorted = [...score];
    sorted.sort((a,b)=>b-a)

    let hash = {}
    for(let i=0; i<sorted.length; i++){
        hash[sorted[i]] = i+1
    }
    for(let i=0; i<score.length; i++){
        let el = hash[score[i]]
        if(el==1) score[i] = "Gold Medal";
        if(el==2) score[i] = "Silver Medal";
        if(el==3) score[i] = "Bronze Medal";
        if(el>3) score[i] = "" + el;
    }
    return score
};
// @lc code=end


