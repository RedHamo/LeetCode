/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zero = {r:{},c:{}}
    let m = matrix.length,n=matrix[0].length;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(matrix[i][j]!=0) continue;
            zero.r[i]=true;
            zero.c[j]=true;
        }
    }
    for(let i=0; i<m; i++){
        if(!zero.r[i]) continue;
        for(let j=0; j<n; j++){
            if(matrix[i][j]!=0) matrix[i][j] = 0;
        }
    }
    for(let j=0; j<n; j++){
        if(!zero.c[j]) continue;
        for(let i=0; i<m; i++){
            if(matrix[i][j]!=0) matrix[i][j] = 0;
        }
    }
    return matrix;
};
