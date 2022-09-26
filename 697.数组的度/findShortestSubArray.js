/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let hash = {}
    let max = 0
    for(let el of nums){
        hash[el]?hash[el]++:hash[el]=1;
        max = Math.max(max, hash[el])
    }
    let res = Infinity;
    for(let key in hash){
        if(hash[key] == max) res = Math.min(getLen(key), res)
    }
    return res;

    function getLen(key){
        let l = 0; 
        let r= nums.length-1;
        while(nums[l]!=key) l++;
        while(nums[r]!=key) r--;
        return r-l+1;
    }
};
