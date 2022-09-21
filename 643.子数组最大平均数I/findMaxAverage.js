/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let res = -Infinity;
    for(let i=0; i<=nums.length-k; i++){
        let count = 0;
        for(let j=0; j<k; j++){
            count += nums[j+i]
        }
        res = Math.max(res,count)
    }
    return res/k;
};
