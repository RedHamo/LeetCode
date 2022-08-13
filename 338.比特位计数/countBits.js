/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let ret = []
    for(let i=0; i<=n; i++){
        ret.push(get1Num(i));
    }
    return ret;
    function get1Num(i){
        let count = 0;
        while(i!=0){
            if(i%2==1) count++;
            i=i>>1;
        }
        return count;
    }
};
// @lc code=end


