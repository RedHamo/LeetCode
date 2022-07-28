/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let temp = ""
    for(let i=0; i<32; i++){
        temp =  temp + (1 & n)
        n = n>>1;
    }
    return parseInt(temp, 2)
};
