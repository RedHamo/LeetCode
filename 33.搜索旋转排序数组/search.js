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
        let mid = ~~((l+r)/2);
        if(nums[l]==target) return result=l;
        if(nums[r]==target) return result=r;
        if(l>=mid||r<mid) return
        helper(l,mid-1)
        helper(mid,r)
    }
};
