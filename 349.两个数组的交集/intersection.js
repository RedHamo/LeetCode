/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hash = {}
    for(let i=0; i<nums1.length; i++){
        hash[nums1[i]] = true;
    }
    let ret = {}
    for(let i=0; i<nums2.length; i++){
        if(hash[nums2[i]] == true) ret[nums2[i]]=true;
    }

    return Object.keys(ret)
};
// @lc code=end


