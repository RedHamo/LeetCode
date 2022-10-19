/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let res = []
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(res[j]){
                res[j].push(matrix[i][j])
            }else{
                res[j] = [matrix[i][j]]
            }
        }
    }
    return res;
};
