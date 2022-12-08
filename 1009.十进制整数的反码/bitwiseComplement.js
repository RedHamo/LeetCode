/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if(n==0) return 1
    //反码=全码-原码
    //010=111-101
    let quan = 0
    let temp = n;
    //先获取全码
    while(temp!=0){
        temp>>=1
        quan<<=1
        quan+=1
    }
    return quan-n
};
