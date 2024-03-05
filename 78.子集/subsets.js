/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]]
    helper(nums,[])
    return res;

    function helper(arr, el){
        if(arr.length==0) return
        for(let i=0; i<arr.length; i++){
            let temp = [...el]
            temp.push(arr[i])
            res.push(temp)
            helper(arr.filter(o=>o>arr[i]), temp)
        }
    }

};
