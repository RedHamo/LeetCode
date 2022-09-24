/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let res = 0;
    for(let i=0; i<nums.length; i++){
        let sumCounter = 1;
        while(nums[i+1]&&nums[i+1]>nums[i]){
            sumCounter++;
            i++;
        }
        res = Math.max(res,sumCounter)
    }
    return res;
};
