/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num<10) return num;
    let temp = 0;
    while(num>=1){
        let item = num%10;
        temp+=item;
        num = ~~(num/10);
    }
    return addDigits(temp)
};
// @lc code=end


