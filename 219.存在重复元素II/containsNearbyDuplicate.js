/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {}
    for(let i=0; i<nums.length; i++){
        if(hash[nums[i]]>=0 && i-hash[nums[i]]<=k) return true;
        hash[nums[i]] = i;
    }
    return false;
};
// @lc code=end


