/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const len = nums.length
    while(true){
        const i = parseInt(Math.random()*len)
        const j = parseInt(Math.random()*len)
        if (i!==j && nums[i] + nums[j] === target) {
            return [i,j]
        }
    }
};
// @lc code=end

