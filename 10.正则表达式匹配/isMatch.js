/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // TODO 263 / 353 个通过测试用例
    let list = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
    if(s.length ==0 || p.length==0 || (p[1]!=="*" && !(s[0]==p[0] || p[0]=="."))) return false;
    console.log(123)
    let point = 0;
    for(let i=0; i<s.length; i++,point++){
        if(p[point]==".") continue;
        if(p[point]=="*" && p[point-1]==".") {
            point--;
            continue;
        };
        if(p[point]=="*" && s[i] != s[i-1]) return false;
        if(p[point]=="*" && s[i] == s[i-1]) {
            point--;
            continue;
        };
        if(list.includes(s[i]) && s[i]!=p[point]) return false;
    }
    return true;
};