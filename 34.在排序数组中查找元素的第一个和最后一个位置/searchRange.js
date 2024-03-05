/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1]
    helper(0, nums.length-1)
    if(nums[0]==target) {
        result[0]=0;
        if(nums[1]!=target) result[1]=0
    }
    if(nums[nums.length-1]==target) {
        result[1]=nums.length-1
        if(nums[nums.length-2]!=target) result[0]=nums.length-1
    }
    return result;
    function helper(l,r){
        if(l>=r) return;
        if(nums[l]==target&&l>0&&nums[l-1]!=target) result[0]=l;
        if(nums[r]==target&&r<nums.length-1&&nums[r-1]!=target) result[0]=r;
        if(nums[l]==target&&l>0&&nums[l+1]!=target) result[1]=l;
        if(nums[r]==target&&r<nums.length-1&&nums[r+1]!=target) result[1]=r;
        let mid = ~~((l+r)/2)
        helper(l,mid)
        helper(mid+1,r)
    }
};
