/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let hash = {}
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]]) return true;
        hash[nums[i]] = 1;
    }
    return false;
};
// @lc code=end


