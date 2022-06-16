/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let p=m+n;
    while (p>=0) {
        if(m>0&&nums1[m-1] > nums2[n-1]) {
            nums1[p-1] = nums1[m-1]
            m--;
        }else if(n>0&&nums1[m-1] < nums2[n-1]){
            nums1[p-1] = nums2[n-1]
            n--;
        }else{
            if (n==0) {
                nums1[p-1] = nums1[m-1]
                m--;
            }else{
                nums1[p-1] = nums2[n-1]
                n--;
            }
        }
        p--;
    }
};
// @lc code=end

