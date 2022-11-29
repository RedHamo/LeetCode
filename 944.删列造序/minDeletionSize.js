/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result = 0;
    for(let i=0; i<strs[0].length; i++){
        let el = strs[0][i]
        for(let j=1; j<strs.length; j++){
            if(strs[j][i] < el) {
                result++;
                break;
            }
        }
    }
    return result;
};
