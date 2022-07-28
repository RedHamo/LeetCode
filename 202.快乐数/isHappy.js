/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hash = {}

    while(hash[n]!=1 && n!=1){
        hash[n] = 1;
        let temp = 0;
        while(n>0){
            temp += (n%10)**2;
            n = ~~(n/ 10);
        }
        n = temp;
    }

    return n==1;
};
