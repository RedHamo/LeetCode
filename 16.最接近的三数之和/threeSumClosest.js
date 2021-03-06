/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let ans = nums[0]+nums[1]+nums[2];
    for(let i=0; i<nums.length; i++){
        let l = i+1,
        r = nums.length-1;
        while(l<r){
            let sum = nums[i]+nums[l]+nums[r];
            if(sum==target) return sum;
            if(Math.abs(target-sum)<Math.abs(target-ans)) ans=sum;
            sum>target?r--:l++;
        }
    }
    return ans;
  };
// @lc code=end

