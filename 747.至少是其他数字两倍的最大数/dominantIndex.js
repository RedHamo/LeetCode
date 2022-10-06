/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxs = [0,0]
    let index = 0;
    for(let i=0; i<nums.length; i++){
        if(maxs[0]<nums[i]) {
            maxs[1] = maxs[0]
            maxs[0] = nums[i]
            index = i;
        }else if(maxs[1]<nums[i]){
            maxs[1] = nums[i]
        }
    }
    if(maxs[0]/maxs[1]>=2) return index;
    return -1;
};
