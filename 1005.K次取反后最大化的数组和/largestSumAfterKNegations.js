/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let min = Infinity;
    let len = nums.length;
    for(let i=0; i<k;i++){
        if(nums[i%len]<0) {
            nums[i%len]= -nums[i%len]
            min = Math.min(min,nums[i%len])
        }
        else if(nums[i%len]==0) break;
        else if(nums[i%len]>0) {
            min = Math.min(min,nums[i%len])
            if(((k-i)%2)==1)  nums.push(-min*2)
            break;
        }
    }
    return nums.reduce((a,b)=>a+b,0)
};
