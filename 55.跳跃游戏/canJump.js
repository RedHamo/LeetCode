/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxDistance = 0;
    let current = 0;
    while(current<nums.length){
        if(current+1 == nums.length) return true;
        if(current==maxDistance&& nums[current]==0) return false;
        maxDistance = Math.max(maxDistance,current+nums[current]);
        current++;
    }
    return true;
};
