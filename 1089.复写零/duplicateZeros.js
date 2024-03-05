/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    if(!arr.includes(0)) return;
    for(let i=0; i<arr.length; i++){
        if(arr[i]==0) {
            arr.splice(i,0,0)
            i++
            arr.pop()
        }
    }

};
