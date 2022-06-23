/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let ans = 0;
    let make = ""
    s = s.trim()
    for(let i=0; i<s.length; i++){
        if(make=="" && (s[i]=="-" || s[i]=="+")) {
            make=s[i];
            continue;
        };

        if(/\d/.test(s[i])) {
            if(make=="") make="+";
            ans = ans*10 + +s[i]
        }else{
            break;
        }
    }
    if(ans >= Math.pow(2,31)) {
        if(make=="-") return -Math.pow(2,31)
        return Math.pow(2,31)-1
    }
    return make=="-"?-ans:ans;
};
// @lc code=end

