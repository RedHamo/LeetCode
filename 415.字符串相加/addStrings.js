/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let diag=0;
    let i = 0;
    let ret = "";
    while(len1>i || len2>i){
        let val1 = i>=len1?0:num1[len1-i-1]
        let val2 = i>=len2?0:num2[len2-i-1]
        i++;
        let count = +val1 + +val2 + diag;
        if(count>=10) diag = 1; 
        if(count<10) diag = 0; 
        let val = count%10
        ret= val + ret;
    }
    if(diag==1) ret = diag + ret;
    return ret;
};
// @lc code=end


