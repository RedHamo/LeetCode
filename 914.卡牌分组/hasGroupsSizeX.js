/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let hash = {}
    for(let el of deck){
        hash[el]?
        hash[el]+=1:
        hash[el]=1
    }
    let arr = Object.values(hash)
    let res = hash[deck[0]]
    return arr.every(i => (res = gcd(res, i)) > 1);

    /**
     *  GCD 最大公约数(greatest common divisor,简写为gcd
     */
    function gcd(x, y) {
        return x == 0 ? y : gcd(y%x, x);
    }
    
};
