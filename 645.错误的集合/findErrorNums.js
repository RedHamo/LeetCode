/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = []
    let hash = {}
    for(let i of nums){
        if(hash[i]){
            res[0] = i; 
        }else{
            hash[i] = true;
        }
    }
    for(let i=1; i<=nums.length; i++){
        if(!hash[i]) {
            res[1] = i;
            break;
        }
    }
    return res;
};
