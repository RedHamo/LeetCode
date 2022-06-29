/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length; i>0; i--){
        if(digits[i-1]==9){
            digits[i-1] = 0;
            if(i==1) digits.unshift(1)
        }else{
            digits[i-1]++;
            break;
        }
    }
    return digits;
};
// @lc code=end


