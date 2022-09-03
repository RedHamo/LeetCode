/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = new Array(nums1.length).fill(-1)
    for(let i=0; i< nums1.length; i++){
        let find = true;
        for(let j=0; j<nums2.length; j++){
            if(find && nums1[i] != nums2[j]) continue;
            find = false;
            if(nums1[i]<nums2[j]) {
                res[i] = nums2[j]
                break;
            }
        }
    }
    return res;
};
// @lc code=end


