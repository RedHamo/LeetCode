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
    let l=0,
    r=nums.length-1,
    ans = nums.length;
    while (l<=r) {
        let mid = ((r-l)>>1) + l;
        if (target == nums[mid]) {
            return mid;
        }else if (target < nums[mid]) {
            ans = mid;
            r = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    return ans;
};
// @lc code=end

