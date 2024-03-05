/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    return getGrayBinary(n).map(o=> parseInt(o,2))
    function getGrayBinary(n){
        if(n==0) return ["0"] 
        if(n==1) return ["0","1"] 

        let gray = getGrayBinary(n-1)
        let max = (2**n)-1
        let res = []
        for(let i=0; i<gray.length; i++){
            res[i] = `0${gray[i]}`
            res[max-i] = `1${gray[i]}`
        }
        return res;
    }
};
