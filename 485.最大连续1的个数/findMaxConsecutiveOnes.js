/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let temp = 0;
    for(let i=0; i< nums.length; i++){
        let el = nums[i];
        if(el==1){
            temp++
        }else{
            max = Math.max(max,temp)
            temp=0;
        }
        if(i==nums.length-1) max = Math.max(max,temp)
    }
    return max;
};
// @lc code=end


