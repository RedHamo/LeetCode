/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * @param {number} target
 */
var twoSum = function(nums, target) {
    let hash = {[nums[0]]:0};
    for (let index = 1; index < nums.length; index++) {
        if ( hash[target - nums[index]] >= 0) {
            return [hash[target - nums[index]], index]
        }else{
            hash[nums[index]] = index;
        }
    }
};
// @lc code=end

