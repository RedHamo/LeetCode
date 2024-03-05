/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let sum = arr.reduce((a,b)=>a+b,0)
    if(sum%3!=0) return false;
    let flag = sum/3;
    let res = false;
    helper(0, 1)
    return res;
    function helper(index, deep){
        if(deep>3 || index==arr.length) return;
        let temp = 0;
        while(index<arr.length){
            temp+=arr[index]
            index++;
            if(temp==flag) helper(index, deep+1)
        }
        if(deep==3) res=true;
    }
};
