/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let hash = {5:0,10:0,20:0}
    for(let el of bills){
        if(el==5) hash[5]++;
        else if(el==10) {
            hash[10]++;
            if(hash[5]>0) hash[5]--;
            else return false;
        }
        else {
            if(hash[10]>0 && hash[5]>0) {
                hash[5]--;
                hash[10]--
            }else if( hash[5]>=3 ){
                hash[5]-=3;
            }else{
                return false;
            }
        }
    }
    return true;
};
