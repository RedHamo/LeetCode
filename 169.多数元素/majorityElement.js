/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let flag=0,item=null;
    for(let i=0; i< nums.length; i++){
        if(item==null) {
            item = nums[i];
            flag++;
            continue;
        }
        if(nums[i]==item) {
            flag++;
        }else{
            flag--;
            if(flag==0) item=null;
        }
    }

    return item;
};
// @lc code=end


