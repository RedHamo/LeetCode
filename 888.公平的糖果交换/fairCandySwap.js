/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    let alcount = aliceSizes.reduce((a,b)=>a+b,0);
    let bocount = bobSizes.reduce((a,b)=>a+b,0);
    for(let i of aliceSizes){
        for(let j of bobSizes){
            if(alcount-i+j == bocount-j+i) return [i,j]
        }
    }
    return false;
};
