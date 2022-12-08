/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let xi = 0;
    for(let i=0; i<nums.length; i++){
        xi<<=1
        xi+=nums[i]
        nums[i] = xi%5==0?true:false;
        xi=xi%5
    }
    return nums;
};
