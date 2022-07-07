/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let ret =[[1]]
    if(numRows==1) return ret;
    for(let i=1; i<numRows; i++){
        let temp = [1];
        let before = ret[i-1]
        for(let j=0; j<i; j++){
            if(j+1==i){
                temp.push(1)
            }else{
                temp.push(before[j]+before[j+1])
            }
        }
        ret.push(temp)
    }
    return ret;
};
// @lc code=end

