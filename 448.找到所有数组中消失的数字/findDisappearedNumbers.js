/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let hash = {}
    for(let i=0; i<n; i++){
        hash[nums[i]] = true;
    }
    
    let ret = []
    for(let i=0; i<n; i++){
        if(!hash[i+1]) ret.push(i+1);
    }
    return ret;
};
// @lc code=end


