/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length==1) return true;
    let flg = "init";
    for(let i=1; i<nums.length; i++){
        if(nums[i]-nums[i-1] == 0) continue;
        if(flg=="init") flg = (nums[i]-nums[i-1]>=0);
        if((nums[i]-nums[i-1]>=0) != flg) return false;
    }
    return true;
};
