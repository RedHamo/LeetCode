/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    let j = k =  nums.length - 1;

    while (i >= 0 && nums[i] >= nums[j] ) {
        i--;
        j--;
    }

    if (i < 0) return nums.reverse();

    while (nums[k] <= nums[i]) {
        k--;
    }

    [nums[i], nums[k]] = [nums[k], nums[i]];

    for (let l = nums.length - 1; j < l; ++j, --l) {
        [nums[j], nums[l]] = [nums[l], nums[j]];
    }
};
// @lc code=end

1~
