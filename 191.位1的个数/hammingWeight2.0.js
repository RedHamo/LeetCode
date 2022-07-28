/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ret = 0;
    while(n>0) {
        ret+= (n & 1)
        n = n>>>1;
    }
    return ret;
};
