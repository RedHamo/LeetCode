/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let dic = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let ans = 0;
    for(let i=0; i<s.length; i++){
        if(i!=s.length-1 && dic[s[i+1]]>dic[s[i]]){
            ans-=dic[s[i]]
        }else{
            ans+=dic[s[i]]
        }
    }
    return ans;
};
// @lc code=end

