/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let result = []
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            result.push([i,j])
        }
    }
    return result.sort((a,b)=> getLen(a)-getLen(b))
    function getLen(arr){
        return Math.abs(rCenter-arr[0])+ Math.abs(cCenter-arr[1])
    }
};
