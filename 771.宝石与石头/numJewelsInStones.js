/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let hash = {};
    let counter = 0;
    for(let el of jewels){
        hash[el] = true;
    }
    for(let el of stones){
        if(hash[el]) counter++;
    }
    return counter;
};
