/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let flag = true
    let stack = ""
    let ret = ""
    for(let i=0; i<s.length; i++){
        stack = flag ? s[i] + stack : stack + s[i]
        
        if(stack.length==k) {
            ret += stack;
            stack = ""
            flag=!flag
        }
    }
    ret += stack;
    return ret;
};
// @lc code=end


