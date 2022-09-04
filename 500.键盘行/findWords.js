/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let hash = {}
    "qwertyuiop".split("").forEach(o=>{
        hash[o] = 1;
    })
    "asdfghjkl".split("").forEach(o=>{
        hash[o] = 2;
    })
    "zxcvbnm".split("").forEach(o=>{
        hash[o] = 3;
    })

    let res = []
    for(let i=0; i<words.length; i++){
        let memo = 0;
        for(let j=0; j<words[i].length; j++){
            let el = hash[words[i][j].toLowerCase()]
            if(memo !=0 && memo != el) {
                memo = 0;
                break;
            }
            memo = el
        }
        if(memo!=0) res.push(words[i])
    }
    return res;
};
// @lc code=end


