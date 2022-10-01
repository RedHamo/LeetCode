/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for(let i=0; i<bits.length; i++){
        if(i==bits.length-1) return true;
        if(bits[i]==1) {
            i+=1;
            if(i>bits.length-1) return false;
            continue;
        }
    }
    return false;
};
