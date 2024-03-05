/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    let memo = {}
    helper([], 0)
    return result;
    function helper(arr, count){
        for(let el of candidates){
            if(el+count == target) {
                let item = [...arr,el].sort((a,b)=>a-b);
                if(!memo[item.join("")]){
                    result.push([...arr,el])
                    memo[item.join("")] = true;
                }
            } else if(el+count < target) {
                helper([...arr,el],el+count)
            }
        }
    }
};
