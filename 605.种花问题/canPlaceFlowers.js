/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n==0) return true;
    if(flowerbed.join("")=="0" || flowerbed.join("")=="00") return n<=1;
    let count = 0;
    for(let i=0; i<flowerbed.length; i++){
        if(flowerbed[i]==1 && i++) continue;
        if(i==0) {
            if(flowerbed[i+1]==0){
                count++;
                flowerbed[i] = 1;
            }
        } else if(i==flowerbed.length-1){
            if(flowerbed[i-1]==0){
                count++;
                flowerbed[i] = 1;
            }
        } else {
            if(flowerbed[i-1]==0 && flowerbed[i+1]==0){
                count++;
                flowerbed[i] = 1;
            }
        }
        if(count>=n) return true;
    }
    
    return false;
};
