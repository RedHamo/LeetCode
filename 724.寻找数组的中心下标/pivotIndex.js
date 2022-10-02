/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((a,b)=>a+b,0)
    let leftsum = 0
    for(let i=0; i<nums.length; i++){
        if((sum-nums[i])/2 == leftsum) return i;
        leftsum += nums[i];
    }
    return -1;
};
