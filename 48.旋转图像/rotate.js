/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length
    // 利用翻转代替旋转
    // 先进行左上角到右下角的对角线翻转
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    // 然后进行垂直方向为轴的翻转
    for(let i=0; i<n; i++){
        for(let j=0; j<Math.floor(n/2); j++){
            [matrix[i][n-1-j],matrix[i][j]] = [matrix[i][j],matrix[i][n-1-j]]
        }
    }
    return matrix
};
