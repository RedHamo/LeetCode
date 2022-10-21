/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let res = 0;
    let counter = -Infinity;
    while(n>0){
        let el = n&1;
        if(el==1) break;
        n>>=1;
    }
    while(n>0){
        let el = n&1;
        if(el==1){
            res = Math.max(res, counter);
            if(counter!=1) counter=1;
        }else{
            counter++;
        }
        n>>=1
    }
    return res;
};
