/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let max = -Infinity;
    nums = nums.sort((a,b)=>Math.abs(b)-Math.abs(a))
    console.log(nums)
    for(let i=0; i<nums.length&&i<7; i++)
        for(let j=i+1;j<nums.length&&j<8; j++)
            for(let k=j+1;k<nums.length&&k<9; k++)
                max = Math.max(max, nums[i]*nums[j]*nums[k])
    return max;
};
