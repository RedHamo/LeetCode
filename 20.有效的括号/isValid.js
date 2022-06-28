/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [],
    p = -1;
    while(p<s.length){
        p++;
        if(s[p]==stack[stack.length-1]){
            stack.pop();
        }else if(s[p]=="("){
            stack.push(")");
        }else if(s[p]=="["){
            stack.push("]");
        }else if(s[p]=="{"){
            stack.push("}");
        }else{
            return false;
        }
    }
    if(stack.length==0) return true;
    return false;
};
// @lc code=end


