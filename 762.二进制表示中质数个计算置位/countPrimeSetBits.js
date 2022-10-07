/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let primes = {
        2: true,
        3: true,
        5: true,
        7: true,
        11: true,
        13: true,
        17: true,
        19: true,
        23: true,
        29: true,
        31: true
    }

    let res = 0;
    for(let i=left; i<=right; i++){
        if(primes[counter(i)]) res++;
    }
    return res;
    /**
    * @param {number} num
    * @return {number}
    */
    function counter(num){
        return num.toString(2).match(/1/g).length
    }
};
