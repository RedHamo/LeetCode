/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    let result = max-min-k-k;
    if(result<=0) return 0;
    return result;
};
