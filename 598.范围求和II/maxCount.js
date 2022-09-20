/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    // let jz = Array(m)
    // for(let i=0; i<m; i++) jz[i] = Array(n).fill(0)
    // for(let op of ops){
    //     for(let i=0; i<op[0]; i++){
    //         for(let j=0; j<op[1]; j++){
    //             jz[i][j]++;
    //         }
    //     }
    // }
    // let count = 0;
    // for(let i in jz){
    //     for(let j in jz[i]){
    //         if(jz[i][j]==jz[0][0]) count++;
    //     }
    // }
    // return count;
    if(ops.length==0) return m*n;
    m = Math.min(...ops.map(o=>o[0]))
    n = Math.min(...ops.map(o=>o[1]))
    return m*n;
};
