/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ret = []
    if(nums.length==0) return ret;
    let start = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i]-nums[i-1]>1 ){
            if(nums[i-1]!=start) ret.push(start+"->"+nums[i-1]);
            if(nums[i-1]==start) ret.push(""+nums[i-1]);
            start = nums[i]
        }
    }
    let len = nums.length;
    if(nums[len-1]!=start) ret.push(start+"->"+nums[len-1]);
    if(nums[len-1]==start) ret.push(""+nums[len-1]);
    return ret;
};
// @lc code=end


