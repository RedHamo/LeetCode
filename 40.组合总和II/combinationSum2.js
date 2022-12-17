/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    let result = []
    helper([], 0, 0)
    return result;
    
    function helper(arr, count, start){
        let currentHash = {}
        for(let i = start; i<candidates.length; i++){
            let el = candidates[i]
            if(currentHash[el]) continue;
            // 打头元素不能相同，不然重复
            if(i>start && candidates[i]==candidates[i-1]) continue;
            if(el+count == target) {
                currentHash[el] = true;
                result.push([...arr,el])
            } else if(el+count < target) {
                helper([...arr,el],el+count, i+1)
            }
        }
    }
};