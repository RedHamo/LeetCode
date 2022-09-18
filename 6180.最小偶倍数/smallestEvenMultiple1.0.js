/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if((n&1)==1) return 2 * n;
    return n;
};
