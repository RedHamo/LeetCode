/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let ans = 0;
    if(height.length==2) return Math.min(...height);
    let l=0,r=height.length-1;
    while(l<r){
        let calc = (r-l)*Math.min(height[l],height[r])
        if(calc>ans) ans = calc;
        if(height[l]>height[r]) {
            r--;
        }else{
            l++;
        }
    }
    return ans;
};
// @lc code=end

