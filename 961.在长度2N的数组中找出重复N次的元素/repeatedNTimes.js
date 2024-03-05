/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let len = nums.length/2;
    let hash = {}
    for(let el of nums){
        if(hash[el]){
            hash[el]++;
            if(hash[el]==len) return el;
        }else{
            hash[el] = 1;
        }
    }
    return never;
};
