/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = []
    let elHash = {}
    for(let el of nums){
        if(elHash[el]){
            elHash[el]++
        }else{
            elHash[el]=1
        }
    }
    helper([],elHash)
    return result;

    function helper(item, elHash){
        if(Object.keys(elHash).length==0) return result.push(item)
        for(let el of Object.keys(elHash)){
            let arg1 = [...item]
            arg1.push(el)
            let arg2 = Object.assign({},elHash);
            arg2[el]--;
            if(arg2[el]==0) delete arg2[el]
            helper(arg1, arg2)
        }
    }
};
