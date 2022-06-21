/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    console.log(nums)
    if(nums.length==0) return 0;
    if(nums.length==1 && nums[0]==target) return 0;
    if(nums.length==1) return nums[0]<target?1:0;
    let med = ~~(nums.length/2);
    if(nums[med] == target) return med
    if(nums[med] > target) return searchInsert(nums.splice(0,med),target)
    if(nums[med] < target) return med + searchInsert(nums.splice(med,nums.length-med),target)
    return never;
};
// @lc code=end

