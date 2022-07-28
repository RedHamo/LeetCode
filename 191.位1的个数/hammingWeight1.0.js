/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2)
    let ret = 0;
    for(let i=0; i< n.length; i++) ret+= +n[i]

    return ret;
};
