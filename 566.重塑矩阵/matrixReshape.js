/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let remat = mat.reduce((a,b)=>{
        return a.concat([...b])
    },[])

    if(remat.length != r*c) return mat;
    let ret = [];
    let temp = []
    for(let i=0; i<remat.length; i++){
        temp.push(remat[i])
        if((i+1)%c==0) {
            ret.push(temp)
            temp = []
        }
    }
    return ret;
};
// @lc code=end


