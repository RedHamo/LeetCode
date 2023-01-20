/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let getHash = (arr)=>{
        return arr.sort((a,b)=>a-b).join("")
    }
    let hashs = {}
    let res = [[]]
    helper(0, [], nums)
    return res;
    function helper(start, current){
        for(let i=start; i<nums.length; i++){
            let temp = [...current].concat([nums[i]])
            helper(i+1, temp)
            let hash = getHash(temp);
            if(hashs[hash]) continue;
            hashs[hash] = true;
            res.push(temp)
        }
    }
};
