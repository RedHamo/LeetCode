/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let n1 = 0;
    let n2 = 0;

    nums1 = nums1.sort((a,b)=>a-b)
    nums2 = nums2.sort((a,b)=>a-b)
    
    let ret = []
    while(true){
        if(n1>=nums1.length || n2>=nums2.length) break;
        if(nums1[n1]>nums2[n2]) n2++;
        if(nums1[n1]<nums2[n2]) n1++;
        if(nums1[n1]==nums2[n2]){
            ret.push(nums1[n1])
            n1++;
            n2++;
        }
    }

    return ret;
};
// @lc code=end


