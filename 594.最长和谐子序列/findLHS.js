/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let hash = {}
    for(let item of nums) hash[item] ? hash[item]++: hash[item] = 1;
    let res = 0;
    for(let item of Object.keys(hash)){
        if(hash[item-1]) res = Math.max(res,Math.abs(hash[item]+hash[item-1]))
    }
    return res;
};
