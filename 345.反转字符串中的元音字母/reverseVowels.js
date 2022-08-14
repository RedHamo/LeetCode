/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0,right=s.length-1;
    s = s.split("");
    let list = { 
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
        A:true,
        E:true,
        I:true,
        O:true,
        U:true,
    }
    while(right-left >=1){
        if(!list[s[left]]){
            left++;
            continue;
        }
        if(!list[s[right]]){
            right--;
            continue;
        }
        [s[left],s[right]] = [s[right],s[left]]
        left++;
        right--;
    }
    return s.join("");
};
// @lc code=end


