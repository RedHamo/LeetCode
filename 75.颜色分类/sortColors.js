/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let len = nums.length
    for(let i=0; i<len; ){
        if(nums[i] == 0) {
            nums.unshift(nums.splice(i,1))
            i++;
        }else if(nums[i] == 2){
            nums.push(nums.splice(i,1))
            len--;
        }else{
            i++;
        }
    }
    return nums;
};
