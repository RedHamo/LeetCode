/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return helper(0, nums.length-1)
    function helper(l, r){
        let mid = ~~((l+r)/2)
        if(nums[mid]==target) return mid
        if(l==mid) {
            if(nums[mid+1]==target) return mid+1
            return -1;
        }
        if(nums[mid]<target) return helper(mid, r)
        if(nums[mid]>target) return helper(l, mid)
    }
};
