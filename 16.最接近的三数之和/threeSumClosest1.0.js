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
    nums.sort((a,b)=>a-b) // 排序
    let ans=nums[0]+nums[1]+nums[2] // 三数之和 数组下标肯定>=3
    for(let i=0;i<nums.length;i++){
        // 双指针 写法还是三数之和的思想写法
        let left=i+1
        let right=nums.length-1
        while(left<right){
            let tempNum = nums[i]+nums[left]+nums[right]
            // 判断条件
            if(Math.abs(target-tempNum)<Math.abs(target-ans)){
                ans=tempNum
            }
            if(tempNum>target){
                right--
            } else if(tempNum<target){
                left++
            } else{
                // 相等情况
                return tempNum
            }
        }
    }
    return ans
};
// @lc code=end

