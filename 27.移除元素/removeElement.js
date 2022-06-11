/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function (nums, val) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        if (nums[left] == val) {
            //nums.splice(left, 1);
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};
// @lc code=end

