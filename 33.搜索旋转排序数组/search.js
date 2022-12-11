/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return nums.indexOf(target)
    //二分法
    let result = -1;
    helper(0, nums.length-1)
    return result;
    function helper(l,r){
        // 减枝，如果该部分是有序的，并且target不在该范围，则不往下继续进行
        if(nums[l]<nums[r] && !(nums[l] <= target && target<=nums[r])) return
        let mid = ~~((l+r)/2);
        if(nums[l]==target) return result=l;
        if(nums[r]==target) return result=r;
        if(l>=mid||r<mid) return
        helper(l,mid-1)
        helper(mid,r)
    }
};
