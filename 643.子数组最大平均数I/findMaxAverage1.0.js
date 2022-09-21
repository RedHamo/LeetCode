/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let res = 0;
    for(let i=0; i<k; i++) res += nums[i];
    let last = res;
    for(let i=k; i<nums.length; i++){
        last = last + nums[i] - nums[i-k];
        res = Math.max(res, last)
    }
    return res/k;
};
