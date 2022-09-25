/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    // while(n>0) {
    //     if((n&1) == ((n>>1)&1)) return false
    //     n>>=1;
    // }
    // return true;
    
    // eg:
    // n = 10101
    // a = 11111
    // return 11111 & 100000
    const a = n ^ (n >> 1);
    return (a & (a + 1)) === 0;
};
